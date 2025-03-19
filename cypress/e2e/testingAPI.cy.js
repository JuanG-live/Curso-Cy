// CRUD: Create, Read, Update, Delete
// POST: Get, Put, Delete

describe('Testing API', () => {
    let postId;
    it('Crear un recurso (POST)', () => {
        cy.request('POST', 'https://jsonplaceholder.typicode.com/posts', {
            body: {
                title: 'Nuevo Post',
                body: 'Contenido del posts',
            },
        }).then((response) => {
            expect(response.status).to.eq(201); //verifica que el recurso se creó
            expect(response.body.id).to.be.a('number');
            postId = response.body.id; //Guarda el ID en el recurso creado
        })
    })
    it('Leer recurso (GET)', () => {
        cy.request({
            method: 'GET',
            url: `https://jsonplaceholder.typicode.com/posts/${postId}`,
            failOnStatusCode: false,
        }).then((response) => {
            if (response.status === 404) {
                cy.log('Recurso no encontrado');
            } else {
                expect(response.status).to.eq(200);
                expect(response.body.title).to.eq('Nuevo Post');
                expect(response.body.body).to.eq('Contenido del posts');
                expect(response.body.userId).to.eq(1);
            }
        })
    })
    it('Actualizar un recurso (PUT)', () => {
        cy.request({
            method: 'PUT',
            url: `https://jsonplaceholder.typicode.com/posts/${postId}`,
            body: {
                title: 'Nuevo nombre',
                body: 'Contenido actualizado',
                userId: 1,
            },
            failOnStatusCode: false,
        }).then((response) => {
            expect(response.status).to.eq(200)//Verificar que la actualización fue exitosa
            expect(response.body.title).to.eq('Nuevo nombre');
            expect(response.body.body).to.eq('Contenido actualizado');
            expect(response.body.userId).to.eq(1);
        })
    })
    it('Eliminar recurso (DELETE)', () => {
        cy.request({
            method: 'DELETE',
            url: `https://jsonplaceholder.typicode.com/posts/${postId}`,
            failOnStatusCode: false,
        }).then((response) => {
            expect(response.status).to.eq(200);
        })
    })
})

