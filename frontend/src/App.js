import React, { useState, useEffect } from 'react';
import NewsList from './NewsList';
import './App.css'; // Import the CSS file

const App = () => {
const [newsData, setNewsData] = useState([]);
const [searchTerm, setSearchTerm] = useState('');

useEffect(() => {
fetch('http://localhost:5000/') // Ensure this matches your backend URL
.then(response => {
if (!response.ok) {
throw new Error('Network response was not ok');
}
return response.json();
})
.then(data => {
console.log('Data fetched from API:', data);
setNewsData(data);
})
.catch(error => console.error('Error fetching data:', error));
}, []);

const handleSearch = (event) => {
setSearchTerm(event.target.value);
};

const filteredNews = newsData.filter(news =>
news.judul_berita.toLowerCase().includes(searchTerm.toLowerCase()) ||
news.jenis_berita.toLowerCase().includes(searchTerm.toLowerCase()) ||
news.ringkasan.toLowerCase().includes(searchTerm.toLowerCase()) ||
news.keywords.toLowerCase().includes(searchTerm.toLowerCase())
);

return (
<div className="App">
<h1>Daftar Berita</h1>
<input
     type="text"
     placeholder="Cari berita..."
     value={searchTerm}
     onChange={handleSearch}
   />
<NewsList newsData={filteredNews} />
</div>
);
};

export default App;