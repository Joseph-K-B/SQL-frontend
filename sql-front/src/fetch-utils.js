const URL = 'https://frozen-tor-10811.herokuapp.com/';

export const getChords = async () => {
    const resp = await fetch(`${URL}chords`);
    const data = await resp.json();
    console.log(data)
    return data;
};

export const getChordsId = async (id) => {
    const resp = await fetch(`${URL}/chords/${id}`)
    const data = await resp.json();
    return data;
}

export const getClasses = async (id) => {
    const resp = await fetch(`${URL}/chords/${id}`)
    const data = await resp.json();
    return data;
}