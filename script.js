const data = [
    {
        imgUrl: 'Assets/User Avatar.png',
        userName: 'adamsdavid',
        cmtTime: '20 hours ago',
        cmtText: 'kkkkkkkkkkk dfjlksdj dksfjsdl dkjfdslkfj dsjkfjs dkjfdsl jdkfjdslkf dkjfjdsl fjdlks djfkls ljfsf df',
        likeCount: 2,
        children: [
            {
                imgUrl: 'Assets/User Avatar-1.png',
                userName: 'abc',
                cmtTime: 'now',
                cmtText: 'kkkkkkkkkkk dfjlksdj dksfjsdl dkjfdslkfj dsjkfjs dkjfdsl jdkfjdslkf dkjfjdsl fjdlks djfkls ljfsf df',
                likeCount: 2,
                children: [
                    {
                        imgUrl: 'Assets/User Avatar-2.png',
                        userName: 'adamsdavid',
                        cmtTime: '20 hours ago',
                        cmtText: 'kkkkkkkkkkk dfjlksdj dksfjsdl dkjfdslkfj dsjkfjs dkjfdsl jdkfjdslkf dkjfjdsl fjdlks djfkls ljfsf df',
                        likeCount: 2,
                        children: []
                    }
                ]
            },
            {
                imgUrl: 'Assets/User Avatar-3.png',
                userName: 'abc',
                cmtTime: '5 hours ago',
                cmtText: 'kkkkkkkkkkk dfjlksdj dksfjsdl dkjfdslkfj dsjkfjs dkjfdsl jdkfjdslkf dkjfjdsl fjdlks djfkls ljfsf df',
                likeCount: 2,
                children: []
            }
        ]
    },
    {
        imgUrl: 'Assets/User Avatar.png',
        userName: 'adamsdavid',
        cmtTime: '20 hours ago',
        cmtText: 'kkkkkkkkkkk dfjlksdj dksfjsdl dkjfdslkfj dsjkfjs dkjfdsl jdkfjdslkf dkjfjdsl fjdlks djfkls ljfsf df',
        likeCount: 2,
        children: [
            {
                imgUrl: 'Assets/User Avatar-1.png',
                userName: 'adamsdavid',
                cmtTime: '20 hours ago',
                cmtText: 'kkkkkkkkkkk dfjlksdj dksfjsdl dkjfdslkfj dsjkfjs dkjfdsl jdkfjdslkf dkjfjdsl fjdlks djfkls ljfsf df',
                likeCount: 2,
                children: [
                    {
                        imgUrl: 'Assets/User Avatar-2.png',
                        userName: 'adamsdavid',
                        cmtTime: '20 hours ago',
                        cmtText: 'kkkkkkkkkkk dfjlksdj dksfjsdl dkjfdslkfj dsjkfjs dkjfdsl jdkfjdslkf dkjfjdsl fjdlks djfkls ljfsf df',
                        likeCount: 2,
                        children: []
                    }
                ]
            },
            {
                imgUrl: 'Assets/User Avatar-3.png',
                userName: 'adamsdavid',
                cmtTime: '20 hours ago',
                cmtText: 'kkkkkkkkkkk dfjlksdj dksfjsdl dkjfdslkfj dsjkfjs dkjfdsl jdkfjdslkf dkjfjdsl fjdlks djfkls ljfsf df',
                likeCount: 2,
                children: []
            }
        ]
    }
];

const getNode = info => {
    return `
        <div class="comment-node">
            <div class="image-container relative-div">
                <img src="${info.imgUrl}" alt="jessica">
                <div class="line"></div>
            </div>
            <div class="comment-main">
                <div>
                    <span>${info.userName}</span>
                    <span>${info.cmtTime}</span>
                </div>
                <p>${info.cmtText}</p>
                <div class="button">
                    <span class="like">
                        <svg viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 7L6.5 1L12 7" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <span class="like-count">${info.likeCount}</span>
                        <svg viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1L6.5 7L12 1" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </span>
                    <span>Reply</span>
                    <span>Report</span>
                </div>
                <div class="child-container">`;
                // close 3
}

function dfs(v) {
    if(v.length === 0) {
        return '';
    }
    var ret = '';
    v.forEach(item => {
        ret += `${getNode(item)} ${dfs(item.children)} </div></div></div>`;
    });
    return ret;
}

document.getElementById('frame').innerHTML = dfs(data);
