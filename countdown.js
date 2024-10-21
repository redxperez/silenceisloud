<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Countdown</title>

    <!-- Your existing CSS and other meta tags -->

    <!-- Add this CSS in your existing stylesheet or here -->
    <style>
        .countdown-container {
            text-align: center;
            font-family: 'Pixelify Sans', sans-serif;
            font-size: 48px;
            margin-top: 50px;
        }

        #countdown {
            color: #ff0000; /* Change this color to fit your design */
        }
    </style>
</head>
<body>

    <!-- Your existing HTML -->

    <!-- Countdown Section -->
    <div class="countdown-container">
        <h4 id="countdown" class="number" data-number="999">999</h4>
    </div>

    <!-- Link to the external JavaScript file -->
    <script src="countdown.js"></script>

</body>
</html>
