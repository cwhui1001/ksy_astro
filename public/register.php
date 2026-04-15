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

function get_email_template(string $title, string $details_html, string $footer_text = ''): string
{
    $year = date('Y');
    return <<<HTML
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; background-color: #f4f7f9; }
        .wrapper { background-color: #f4f7f9; padding: 40px 20px; }
        .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 10px 25px rgba(0,0,0,0.05); }
        .header { background: linear-gradient(135deg, #e91e63 0%, #9c27b0 100%); color: white; padding: 40px 30px; text-align: center; }
        .header h1 { margin: 0; font-size: 28px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; }
        .header p { margin: 10px 0 0; opacity: 0.9; font-size: 16px; }
        .content { padding: 40px 30px; }
        .greeting { font-size: 18px; font-weight: 600; margin-bottom: 20px; color: #222; }
        .details-table { width: 100%; border-collapse: separate; border-spacing: 0; margin: 25px 0; border: 1px solid #edf2f7; border-radius: 8px; overflow: hidden; }
        .details-table th { background-color: #f8fafc; color: #64748b; text-align: left; padding: 12px 15px; font-size: 12px; font-weight: 600; text-transform: uppercase; border-bottom: 1px solid #edf2f7; width: 40%; }
        .details-table td { background-color: #ffffff; color: #1e293b; padding: 12px 15px; font-size: 14px; border-bottom: 1px solid #edf2f7; }
        .details-table tr:last-child th, .details-table tr:last-child td { border-bottom: none; }
        .footer { background: #1e293b; color: #94a3b8; padding: 30px; text-align: center; font-size: 13px; }
        .footer a { color: #e91e63; text-decoration: none; font-weight: 600; }
        .footer p { margin: 8px 0; }
        .btn { display: inline-block; padding: 12px 24px; background-color: #e91e63; color: white !important; text-decoration: none; border-radius: 6px; font-weight: 600; margin-top: 20px; }
    </style>
</head>
<body>
    <div class="wrapper">
        <div class="container">
            <div class="header">
                <h1>ASTRO</h1>
                <p>{$title}</p>
            </div>
            <div class="content">
                {$details_html}
            </div>
            <div class="footer">
                <p>&copy; {$year} KSY Enterprise - Astro Authorized Dealer</p>
                <p>{$footer_text}</p>
                <p>Website: <a href="https://astro-registration.my">astro-registration.my</a></p>
            </div>
        </div>
    </div>
</body>
</html>
HTML;
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
            'MIME-Version: 1.0',
            'Content-Type: text/html; charset=UTF-8',
            'Content-Transfer-Encoding: base64',
        ];
        $encodedBody = chunk_split(base64_encode($body));
        return @mail($to, $subject, $encodedBody, implode("\r\n", $headers));
    }

    $boundary = '=_Part_' . bin2hex(random_bytes(12));
    $fileName = basename($attachmentPath);
    $fileData = file_get_contents($attachmentPath);
    if ($fileData === false) {
        $headers = [
            $fromHeader,
            'Reply-To: ' . $replyTo,
            'MIME-Version: 1.0',
            'Content-Type: text/html; charset=UTF-8',
            'Content-Transfer-Encoding: base64',
        ];
        $encodedBody = chunk_split(base64_encode($body));
        return @mail($to, $subject, $encodedBody, implode("\r\n", $headers));
    }

    $mimeType = 'application/octet-stream';
    if (function_exists('mime_content_type')) {
        $detected = mime_content_type($attachmentPath);
        if ($detected !== false && $detected !== '') {
            $mimeType = $detected;
        }
    }

    $encodedFile = chunk_split(base64_encode($fileData));
    $encodedBody = chunk_split(base64_encode($body));

    $message = "This is a multi-part message in MIME format.\r\n\r\n";
    $message .= "--{$boundary}\r\n";
    $message .= "Content-Type: text/html; charset=UTF-8\r\n";
    $message .= "Content-Transfer-Encoding: base64\r\n\r\n";
    $message .= $encodedBody . "\r\n";
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

$detailsHtml = '<table class="details-table">';
foreach ($responses as $label => $value) {
    if ($label === 'Payslip Upload' && $value !== '-') {
         $detailsHtml .= "<tr><th>{$label}</th><td><a href=\"https://astro-registration.my{$value}\" style=\"color: #e91e63; text-decoration: none; font-weight: 600;\">View Attachment</a></td></tr>";
    } else {
         $detailsHtml .= "<tr><th>{$label}</th><td>" . nl2br(htmlspecialchars((string)$value)) . "</td></tr>";
    }
}
$detailsHtml .= '</table>';

$adminSubject = 'New Astro Registration Submission';
$adminBody = get_email_template(
    'New Registration Submission',
    "<div class=\"greeting\">Hello Admin,</div><p>A new registration has been submitted from the website. Details are provided below:</p>" . $detailsHtml,
    'This is an automated message sent from the Astro Registration Portal.'
);

$userSubject = 'Copy of Your Astro Registration';
$userBody = get_email_template(
    'Registration Received',
    "<div class=\"greeting\">Hi {$fullName},</div>
     <p>Thank you for your registration! We have received your application for <strong>{$package}</strong>.</p>
     <p>Our team is currently reviewing your details and will contact you via phone or WhatsApp shortly to confirm the next steps and schedule your installation.</p>
     <div style=\"margin: 30px 0; padding: 20px; background: #f8fafc; border-left: 4px solid #e91e63; border-radius: 4px;\">
        <strong style=\"display: block; margin-bottom: 5px; color: #1e293b;\">Next Steps:</strong>
        <span style=\"font-size: 14px; color: #64748b;\">1. We verify your documents.<br>2. We call you for appointment.<br>3. Successful installation!</span>
     </div>
     <h3 style=\"font-size: 16px; color: #1e293b; margin-top: 30px;\">Summary of Your Details:</h3>" . $detailsHtml,
    'Thank you for choosing Astro. We look forward to serving you!'
);

$fromHeader = 'From: Astro Registration <admin@astro-registration.my>';
$userHeaders = [
    $fromHeader,
    'Reply-To: ' . ADMIN_EMAIL,
    'MIME-Version: 1.0',
    'Content-Type: text/html; charset=UTF-8',
    'Content-Transfer-Encoding: base64',
];

$encodedUserBody = chunk_split(base64_encode($userBody));

send_admin_mail_with_attachment(ADMIN_EMAIL, $adminSubject, $adminBody, (string)$email, $uploadedPayslipFullPath);
@mail($email, $userSubject, $encodedUserBody, implode("\r\n", $userHeaders));

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
