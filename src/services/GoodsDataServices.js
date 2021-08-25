import https from "../https-common";

class TutorialDataService {
    getAll() {
        return https.get("/tutorials");
    }

    get(id) {
        return https.get(`/tutorials/${id}`);
    }

    create(data) {
        return https.post("/tutorials", data);
    }

    update(id, data) {
        return https.put(`/tutorials/${id}`, data);
    }

    delete(id) {
        return https.delete(`/tutorials/${id}`);
    }

    deleteAll() {
        return https.delete(`/tutorials`);
    }

    findByTitle(title) {
        return https.get(`/tutorials?title=${title}`);
    }
}

export default new TutorialDataService();
