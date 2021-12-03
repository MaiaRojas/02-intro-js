

/* const getImagenPromise = () => {
  return new Promise(resolve => resolve('http'))
};

getImagenPromise.then(console.log('Dta')) */



const getImage = async () => {
  try {
    const apiKey = 'OyHxC5PSZLYcgZV31MQ438h3ZIazMs67';

    const peticion = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
    const { data } = await  peticion.json();
    const { url } = data.images.original;
    const img = document.createElement('img');
    
    img.src = url; 
    document.body.append(img);
  } catch (error){
    console.log(error);
  }
};

getImage();

