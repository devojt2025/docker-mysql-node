import axios from 'axios'
export const login = async (req, res) => {
    try {
        console.log("Login request received:", req.body);
        const formData = new URLSearchParams();
        formData.append('username', req.body.username);
        formData.append('password', req.body.password);
        formData.append('grant_type', 'client_credentials')
        const response = await axios.post('https://integration-middleware.as.restaurant-partners.com/v2/login', formData, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });
        res.json(response.data);
    } catch (err) {
        res.status(500).json({ error: 'API proxy error', details: err.message });
    }
}