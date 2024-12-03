document.getElementById('clickMeButton').addEventListener('click', () => {
    const title = document.getElementById('title');
    title.textContent = 'Button Clicked!';
    title.style.color = '#007bff';
    alert('You clicked the button!');
});
