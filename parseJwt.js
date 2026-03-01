function parseJwt (token) {
    try {
        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        const jsonPayload = Buffer.from(base64, 'base64').toString('utf-8');
        return JSON.parse(jsonPayload);
    } catch (e) {
        console.error('Ошибка при парсинге JWT:', e);
        return null;
    }
}

module.exports = {
  parseJwt
};