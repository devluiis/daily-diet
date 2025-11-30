const BASE = "http://localhost:3333";

async function request(path, options = {}) {
    const headers = options.headers ? { ...options.headers } : {};
    const token = localStorage.getItem("daily:token");
    if (token) headers["Authorization"] = `Bearer ${token}`;
    if (!headers["Content-Type"] && options.body) headers["Content-Type"] = "application/json";

    const res = await fetch(BASE + path, { ...options, headers });
    const text = await res.text();
    const data = text ? JSON.parse(text) : null;
    if (!res.ok) {
        const error = new Error("HTTP Error");
        error.status = res.status;
        error.data = data;
        throw error;
    }
    return data;
    }

    export const api = {
    get: (p) => request(p, { method: "GET" }),
    post: (p, b) => request(p, { method: "POST", body: JSON.stringify(b) }),
    put: (p, b) => request(p, { method: "PUT", body: JSON.stringify(b) }),
    del: (p) => request(p, { method: "DELETE" })
    };
