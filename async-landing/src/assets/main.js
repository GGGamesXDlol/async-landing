const API = 'https://youtube138.p.rapidapi.com/channel/videos/?id=UCSFD5jN6v9iYadZp10_3uJg&hl=en&gl=US'

const content = document.getElementById('content');

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '6c6195b6abmshe68b3861da8bf0dp1f68e4jsn18e54a9bc447',
		'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
	}
};

async function fetchData(urlApi)
{
    const response = await fetch(urlApi, options);
    const data = await response.json();
    return data;
}

(async () => 
{
    try
    {
        const videos = await fetchData(API); console.log(videos);
        let view = 
        `
        ${videos.contents.map(video =>
            `
            <div class="group relative">
                <div
                class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                    <img src="${video.video.thumbnails[3].url}" alt="${video.video.title}" class="w-full">
                </div>
                <div class="mt-4 flex justify-between">
                    <h3 class="text-sm text-gray-700">
                        <span aria-hidden="true" class="absolute inset-0"></span>
                            ${video.video.title}
                    </h3>
                </div>
            </div>
            `).slice(0, 4).join('')}
        `;
        content.innerHTML = view;
    }
    catch (error)
    {
        console.log(error);
        alert('A ocurrido un error inesperado, usa Ctrl/comando+Shift+C y selecciona la consola para verlo');
    }

})();