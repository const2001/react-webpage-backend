<?php
// Ορίζει τον τύπο απόκρισης σε JSON
header('Content-Type: application/json');

// Ενεργοποίηση CORS
header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
header('Access-Control-Allow-Headers: Content-Type, Authorization');

// Ρυθμίσεις βάσης δεδομένων
$host = 'localhost:3306';
$dbname = 'subscribers';
$username = 'root';
$password = '';

try {
    // Σύνδεση με τη βάση δεδομένων
    $db = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    echo 'Αποτυχία σύνδεσης: ' . $e->getMessage();
}

// Έλεγχος μεθόδου αιτήματος και σημείου πρόσβασης (endpoint)
$method = $_SERVER['REQUEST_METHOD'];
$endpoint = $_SERVER['REQUEST_URI'];
$port = $_SERVER['SERVER_PORT'];

// Χειρισμός GET αιτήματος
if ($method === 'GET' && $endpoint === '/users') {
    // Επεξεργασία GET αιτήματος και ανάκτηση δεδομένων
    $data = [
        'message' => 'Το GET αίτημα επεξεργάστηκε με επιτυχία.',
        'data' => [
            'id' => 1,
            'name' => 'Γιάννης Κούλης',
            'email' => 'johndoe@example.com'
        ]
    ];

    // Επιστροφή της απόκρισης ως JSON
    echo json_encode($data);
}

// Χειρισμός POST αιτήματος
// Υποθέτοντας ότι τα δεδομένα JSON περιέχουν το όνομα, το email και τον κωδικό πρόσβασης του χρήστη
if ($method === 'POST' && $endpoint === '/add_request') {
    $json = file_get_contents('php://input');
    $data = json_decode($json);

    if ($data) {
        $username = $data->username;
        $userphone = $data->userphone;
        $useroption = $data->useroption;
        $useremail = $data->useremail;
        $usersubject = $data->usersubject;
        $usermessage = $data->usermessage;

        // Εκτέλεση τυχόν απαραίτητων ελέγχων δεδομένων εδώ

        try {
            $stmt = $db->prepare('INSERT INTO requests (name, phone_number, department, email, subject, message) VALUES (?, ?, ?, ?, ?, ?)');
            $stmt->execute([$username, $userphone, $useroption, $useremail, $usersubject, $usermessage]);
            echo 'Αποθηκεύτηκε στη βάση δεδομένων.';
        } catch (PDOException $e) {
            echo 'Σφάλμα κατά την αποθήκευση του χρήστη: ' . $e->getMessage();
        }
    } else {
        echo 'Μη έγκυρα δεδομένα JSON.';
    }
}

if ($method === 'POST' && $endpoint === '/add_subscriber') {
    $json = file_get_contents('php://input');
    $data = json_decode($json);

    if ($data) {
        $username = $data->username;
        $userdname = $data->userdname;
        $useremail = $data->useremail;

        // Εκτέλεση τυχόν απαραίτητων ελέγχων δεδομένων εδώ

        try {
            $stmt = $db->prepare('INSERT INTO subscribers (username, name, email) VALUES (?, ?, ?)');
            $stmt->execute([$username, $userdname, $useremail]);
            echo 'Αποθηκεύτηκε στη βάση δεδομένων.';
        } catch (PDOException $e) {
            echo 'Σφάλμα κατά την αποθήκευση του χρήστη: ' . $e->getMessage();
        }
    } else {
        echo 'Μη έγκυρα δεδομένα JSON.';
    }
}
?>
