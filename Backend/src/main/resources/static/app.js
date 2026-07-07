const baseUrlInput = document.getElementById('baseUrl');
const statusBox = document.getElementById('status');
const responseBox = document.getElementById('responseBox');

function getApiUrl(endpoint) {
    const base = baseUrlInput.value.trim();
    return `${base}${endpoint}`;
}

async function callApi(endpoint, method = 'GET', payload = null) {
    statusBox.textContent = `Calling ${method} ${endpoint}...`;
    try {
        const options = {
            method,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        };

        if (payload) {
            options.body = JSON.stringify(payload);
        }

        const response = await fetch(getApiUrl(endpoint), options);
        const text = await response.text();
        let data = text;

        try {
            data = JSON.parse(text);
        } catch (error) {
            // keep plain text response
        }

        statusBox.textContent = `Status: ${response.status} ${response.statusText}`;
        responseBox.textContent = JSON.stringify(data, null, 2);
    } catch (error) {
        statusBox.textContent = 'Request failed';
        responseBox.textContent = error.message;
    }
}

document.getElementById('healthBtn').addEventListener('click', () => callApi('/shops'));

document.querySelectorAll('button[data-endpoint]').forEach((button) => {
    button.addEventListener('click', () => {
        const endpoint = button.getAttribute('data-endpoint');
        const method = button.getAttribute('data-method') || 'GET';
        const rawPayload = button.getAttribute('data-payload');
        const payload = rawPayload ? JSON.parse(rawPayload) : null;
        callApi(endpoint, method, payload);
    });
});
