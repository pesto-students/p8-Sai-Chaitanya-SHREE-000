import React, {useState, useEffect} from 'react'

const parent = {
    marginRight: '50px',
    marginLeft: '50px',
}

const top = {
    display: 'flex',
    marginTop: '100px',
};

const mainText = {
    flex: 2,
};

const image = {
    opacity: .1,
    flex: 1,
};

const bottom = {
    marginTop: '50px'
};

const box1 = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
};

const box2 = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    marginTop: '80px'
};

const buttonStyle = {
    borderRadius: '18px',
    backgroundColor: 'bisque',
    borderStyle: 'dashed',
    height: '25px'
};

const inputStyle = {
    backgroundColor: 'bisque',
    borderRadius: '18px',
    borderStyle: 'dashed',
    marginRight: '15px',
    width: '500px',
    height: '25px'
};

const row = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: "white",
    width: '100%',
    textAlign: 'center',
    color: 'green',
    text: 'center'
}

const Content = () => {
    const [link, setLink] = useState('https://www.shutterstock.com/image-vector/girl-working-on-computer-evening-260nw-773613916.jpg');
    const [linkArr, setLinkArr] = useState([]);
    const [validLink, setValidLink] = useState(true);

    useEffect(() => {
        let timerId = null;
        if(!validLink) {
            timerId = setTimeout(() => {
                setValidLink(true);
            }, 2000);
        };
        return () => clearTimeout(timerId);
    }, [validLink]);

    const shortenLink = async () => {
        if(link.trim()){
        const response = await fetch(`https://api.shrtco.de/v2/shorten?url=${link}`);
        const data = await response.json();
        if(!data?.ok) setValidLink(false);
        else{
        setValidLink(true);
        setLinkArr((prev) => [
            ...prev,
            {
                originalLink: link,
                shortenedLink: data.result.short_link,
            }
            
        ])};
        setLink('');
      } else {
        setValidLink(false);
      }
    };

  return (
    <div style={parent}>
        <div style={top}>
        <div style={mainText}>More than just shortner links</div>
        <div style={image}>
            <img 
            src='https://www.shutterstock.com/image-vector/girl-working-on-computer-evening-260nw-773613916.jpg'
            alt='computer-img'
            />
        </div>
        </div>

        <div style={bottom}>
            <div style={box1}>
                <input 
                value={link}
                style={inputStyle} 
                onChange={(e) => setLink(e.target.value)}
                type='url' 
                />
                <button 
                style={buttonStyle}
                onClick={shortenLink}
                > 
                Shorten
                </button>
            </div>
            {!validLink ?
            <div style={box2}>Entered Url is not correct</div>: 
            (
                !linkArr.length ? <div style={box2}>No Url Saved</div> :
                <div style={box2}>
                    
                    {
                        linkArr.map((elem) => {
                            return(
                                <div style={row}>
                                <div>
                                {elem.originalLink}
                                </div>
                                <div>
                                {elem.shortenedLink}
                                </div>
                                </div>
                            )
                        })
                    }
                </div> 
            )}
        </div>
    </div>
  )
}

export default Content;