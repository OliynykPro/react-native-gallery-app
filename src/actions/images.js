import { GET_IMAGES } from './types';

//GET IMAGES

export const getImages = () => dispatch => {
    console.log(123);
    const token = 'cf49c08b444ff4cb9e4d126b7e9f7513ba1ee58de7906e4360afc1a33d1bf4c0';

    fetch(`https://api.unsplash.com/photos?client_id=${token}`)
        .then((res) => {
            if (res.status == 200) {
                return res.json().then((data) => {
                    dispatch({
                        type: GET_IMAGES,
                        payload: data
                    })
                })
            }
        }).catch((err) => console.log(err));
}