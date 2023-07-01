import http from "./http-common";

export class PaymentsApiService {
    getAll() {
        return http.get('/payments');
    }
    getById(id) {
        return http.get(`/payments/${id}`);
    }
    create(data) {
        return http.post('/payments', data);
    }
    update(id, data) {
        return http.put(`/payments/${id}`, data);
    }

    delete(id) {
        return http.delete(`/payments/${id}`);
    }
    findByTitle(title) {
        return http.get(`/payments?title=${title}`);
    }
}