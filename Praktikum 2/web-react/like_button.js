const e = React.createElement;

function LikeButton(){
    // display a "like" <button>
    return e(
        'button',
        {
            onClick: () => alert('Berhasil')
        },
        'Like'
    );
}

// const button=()=>{
//     return <button>Like</button>
// }

const domContainer = document.querySelector('#like_button_container');
ReactDOM.render(e(LikeButton), domContainer);
