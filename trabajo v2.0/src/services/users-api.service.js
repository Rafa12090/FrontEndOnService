import http from '../services/http-common';

export class UsersApiService {
    getAll() {
        return http.get('/users').then(response => response.data);
    }
    getById(id) {
        return http.get(`/users/${id}`);
    }
    create(data) {
        return http.post('/users', data);
    }
    update(id, data) {
        return http.put(`/users/${id}`, data);
    }

    delete(id) {
        return http.delete(`/users/${id}`);
    }
    findByTitle(title) {
        return http.get(`/users?title=${title}`);
    }
}