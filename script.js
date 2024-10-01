document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('form');

    form.addEventListener('submit', async(event) => {
        event.preventDefault();

        const emailValue = document.getElementById('email').value;
        const textValue = document.getElementById('text').value;
        

        const formData = {
            text: textValue,
            email: emailValue,
        }

        console.log('Dados coletados: ', formData);

        const response = await fetch('https://www.exemplo.com.br', { 
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });
        });
});

