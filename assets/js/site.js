const apiUrl = 'https://dog.ceo/api/breeds/image/random/1';

fetch(apiUrl)



    .then(response => {

        console.table(response);

        if (!response.ok) {
            throw new Error(`Network response was not ok: ${response.status}`);
        }


        return response.json(); // Parse the response body as JSON
    })


    .then(data => {

        // Process the data here
        console.table(data.message);


        // You can access the dog images from data.message
        const dogImages = data.message;



        // Display the dog images (assuming you have an HTML element with id "dog-images")
        const dogImagesElement = document.getElementById('dog-images');

        if (dogImagesElement) {

            dogImages.map(imageUrl => {
                const img = document.createElement('img');
                img.src = imageUrl;
                dogImagesElement.appendChild(img);
            });
        }
    })


    .catch(error => {
        console.error('Error:', error);
    }); 
