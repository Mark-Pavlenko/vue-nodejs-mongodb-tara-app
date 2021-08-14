import https from "../http-common";

class TutorialDataService {
    getAll() {
        return https.get("/products");
    }

    get(id) {
        return https.get(`/products/${id}`);
    }

    create(data) {
        return https.post("/products", data);
    }

    update(id, data) {
        return https.put(`/products/${id}`, data);
    }

    delete(id) {
        return https.delete(`/products/${id}`);
    }

    deleteAll() {
        return https.delete(`/products`);
    }

    findByTitle(title) {
        return https.get(`/products?title=${title}`);
    }
}

export default new TutorialDataService();