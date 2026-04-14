<?php

declare(strict_types=1);

const ADMIN_EMAIL = 'admin@astro-registration.my';
const WHATSAPP_NUMBER = '60146833321';
const MAX_UPLOAD_SIZE = 5242880; // 5MB

function clean_input(string $value): string
{
    return trim(str_replace(["\r", "\n"], ' ', $value));
}

function safe_filename(string $name): string
{
    return preg_replace('/[^A-Za-z0-9._-]/', '_', $name) ?? 'upload';
}

function send_admin_mail_with_attachment(
    string $to,
    string $subject,
    string $body,
    string $replyTo,
    string $attachmentPath = ''
): bool {
    $fromHeader = 'From: Astro Registration <admin@astro-registration.my>';

    if ($attachmentPath === '' || !is_file($attachmentPath)) {
        $headers = [
            $fromHeader,
            'Reply-To: ' . $replyTo,
            'Content-Type: text/plain; charset=UTF-8',
        ];
        return @mail($to, $subject, $body, implode("\r\n", $headers));
    }

    $boundary = '=_Part_' . bin2hex(random_bytes(12));
    $fileName = basename($attachmentPath);
    $fileData = file_get_contents($attachmentPath);
    if ($fileData === false) {
        $headers = [
            $fromHeader,
            'Reply-To: ' . $replyTo,
            'Content-Type: text/plain; charset=UTF-8',
        ];
        return @mail($to, $subject, $body, implode("\r\n", $headers));
    }

    $mimeType = 'application/octet-stream';
    if (function_exists('mime_content_type')) {
        $detected = mime_content_type($attachmentPath);
        if ($detected !== false && $detected !== '') {
            $mimeType = $detected;
        }
    }

    $encodedFile = chunk_split(base64_encode($fileData));

    $message = "--{$boundary}\r\n";
    $message .= "Content-Type: text/plain; charset=UTF-8\r\n";
    $message .= "Content-Transfer-Encoding: 8bit\r\n\r\n";
    $message .= $body . "\r\n\r\n";
    $message .= "--{$boundary}\r\n";
    $message .= "Content-Type: {$mimeType}; name=\"{$fileName}\"\r\n";
    $message .= "Content-Disposition: attachment; filename=\"{$fileName}\"\r\n";
    $message .= "Content-Transfer-Encoding: base64\r\n\r\n";
    $message .= $encodedFile . "\r\n";
    $message .= "--{$boundary}--";

    $headers = [
        $fromHeader,
        'Reply-To: ' . $replyTo,
        'MIME-Version: 1.0',
        'Content-Type: multipart/mixed; boundary="' . $boundary . '"',
    ];

    return @mail($to, $subject, $message, implode("\r\n", $headers));
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('Location: /#registration-section');
    exit;
}

$hasAccount = clean_input($_POST['hasAccount'] ?? '');
$accountNumber = clean_input($_POST['accountNumber'] ?? '');
$package = clean_input($_POST['package'] ?? '');
$isCivilServant = clean_input($_POST['isCivilServant'] ?? '');
$installationMethod = clean_input($_POST['installationMethod'] ?? '');
$fullName = clean_input($_POST['fullName'] ?? '');
$icNumber = clean_input($_POST['icNumber'] ?? '');
$phone = clean_input($_POST['phone'] ?? '');
$emailRaw = trim($_POST['email'] ?? '');
$email = filter_var($emailRaw, FILTER_VALIDATE_EMAIL);
$address = trim($_POST['address'] ?? '');
$remark = trim($_POST['remark'] ?? '');
$installationDate = clean_input($_POST['installationDate'] ?? '');
$installationTime = clean_input($_POST['installationTime'] ?? '');
$uploadedPayslipPath = '';
$uploadedPayslipFullPath = '';

if (
    $hasAccount === '' ||
    $package === '' ||
    $isCivilServant === '' ||
    $installationMethod === '' ||
    $fullName === '' ||
    $icNumber === '' ||
    $phone === '' ||
    $email === false ||
    $address === '' ||
    $installationDate === '' ||
    $installationTime === '' ||
    ($hasAccount === 'Yes' && $accountNumber === '')
) {
    http_response_code(400);
    echo 'Invalid form submission. Please go back and check your input.';
    exit;
}

if ($isCivilServant === 'Yes') {
    if (!isset($_FILES['payslipFile']) || !is_array($_FILES['payslipFile'])) {
        http_response_code(400);
        echo 'Payslip upload is required for civil servant registration.';
        exit;
    }

    $file = $_FILES['payslipFile'];

    if (($file['error'] ?? UPLOAD_ERR_NO_FILE) !== UPLOAD_ERR_OK) {
        http_response_code(400);
        echo 'Payslip file upload failed. Please try again.';
        exit;
    }

    if (($file['size'] ?? 0) > MAX_UPLOAD_SIZE) {
        http_response_code(400);
        echo 'Payslip file is too large. Maximum allowed is 5MB.';
        exit;
    }

    $extension = strtolower(pathinfo((string) ($file['name'] ?? ''), PATHINFO_EXTENSION));
    $allowedExtensions = ['pdf', 'jpg', 'jpeg', 'png', 'webp'];

    if (!in_array($extension, $allowedExtensions, true)) {
        http_response_code(400);
        echo 'Invalid payslip file format. Allowed: PDF, JPG, JPEG, PNG, WEBP.';
        exit;
    }

    $uploadDir = __DIR__ . '/uploads/payslips';
    if (!is_dir($uploadDir) && !mkdir($uploadDir, 0755, true) && !is_dir($uploadDir)) {
        http_response_code(500);
        echo 'Server could not prepare upload folder.';
        exit;
    }

    $baseName = safe_filename(pathinfo((string) $file['name'], PATHINFO_FILENAME));
    $finalFileName = $baseName . '-' . date('YmdHis') . '-' . bin2hex(random_bytes(4)) . '.' . $extension;
    $targetPath = $uploadDir . '/' . $finalFileName;

    if (!move_uploaded_file((string) $file['tmp_name'], $targetPath)) {
        http_response_code(500);
        echo 'Unable to save uploaded payslip file.';
        exit;
    }

    $uploadedPayslipPath = '/uploads/payslips/' . $finalFileName;
    $uploadedPayslipFullPath = $targetPath;
}

$submittedAt = date('Y-m-d H:i:s');

$responses = [
    'Has Astro Account' => $hasAccount,
    'Astro Account Number' => $accountNumber !== '' ? $accountNumber : '-',
    'Selected Package' => $package,
    'Civil Servant' => $isCivilServant,
    'Installation Method' => $installationMethod,
    'Full Name' => $fullName,
    'I/C or Passport Number' => $icNumber,
    'Phone Number' => $phone,
    'Email Address' => (string) $email,
    'Installation Address' => $address,
    'Special Remark' => $remark !== '' ? $remark : '-',
    'Installation Date' => $installationDate,
    'Installation Time' => $installationTime,
    'Payslip Upload' => $uploadedPayslipPath !== '' ? $uploadedPayslipPath : '-',
    'Submitted At' => $submittedAt,
];

$responseLines = [];
foreach ($responses as $label => $value) {
    $responseLines[] = $label . ': ' . $value;
}
$responseText = implode("\n", $responseLines);

$adminSubject = 'New Astro Registration Submission';
$adminBody = "A new registration has been submitted.\n\n" . $responseText . "\n";

$userSubject = 'Copy of Your Astro Registration';
$userBody = "Hi {$fullName},\n\n"
    . "Thanks for your registration. Here is a copy of your submitted details:\n\n"
    . $responseText
    . "\n\n"
    . "Our team will reach out to you soon.\n";

$fromHeader = 'From: Astro Registration <admin@astro-registration.my>';
$userHeaders = [
    $fromHeader,
    'Reply-To: ' . ADMIN_EMAIL,
    'Content-Type: text/plain; charset=UTF-8',
];

send_admin_mail_with_attachment(ADMIN_EMAIL, $adminSubject, $adminBody, (string) $email, $uploadedPayslipFullPath);
@mail($email, $userSubject, $userBody, implode("\r\n", $userHeaders));

$waLines = [
    'New Astro Registration',
    'Name: ' . $fullName,
    'Phone: ' . $phone,
    'Email: ' . (string) $email,
    'Package: ' . $package,
    'Installation: ' . $installationDate . ' ' . $installationTime,
    'Address: ' . $address,
];

if ($remark !== '') {
    $waLines[] = 'Remark: ' . $remark;
}

$waMessage = rawurlencode(implode("\n", $waLines));

$whatsAppUrl = 'https://api.whatsapp.com/send?phone=' . WHATSAPP_NUMBER . '&text=' . $waMessage;

header('Location: ' . $whatsAppUrl);
exit;
