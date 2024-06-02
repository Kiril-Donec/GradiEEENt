document.getElementById('blackButton').addEventListener('click', () => {
    document.body.className = '';
    document.body.classList.add('black1', 'black2', 'black3', 'black4', 'black5');
    document.querySelector('.button-container').style.display = 'none';
});

document.getElementById('variousButton').addEventListener('click', () => {
    document.body.className = '';
    document.body.classList.add(
        'various1', 'various2', 'various3', 'various4', 'various5', 'various6',
        'various7', 'various8', 'various9', 'various10'
    );
    document.querySelector('.button-container').style.display = 'none';
});
