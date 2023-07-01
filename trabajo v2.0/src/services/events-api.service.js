import http from '../services/http-common';

export class EventsApiService{
    getAll(){
        return http.get('events');
    }
    getById(id){
        return http.get(`events/${id}`);
    }
    create(data){
        return http.post('events', data);
    }
    update(id, data){
        return http.post(`events/${id}`, data);
    }
    delete(id){
        return http.delete(`events/${id}`);
    }
    findByTitle(title){
        return http.get(`events?title=${title}`);
    }
}