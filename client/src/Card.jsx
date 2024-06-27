
export default function SingeItem({img, seller, title}){

    const styleCard = {
        width: '290px',
        height: '310px',
        backgroundColor: 'rgb(245, 244, 242)',
        boxShadow:"0 4px 4px rgba(0, 0, 0, 0.1)",
        borderRadius: '8px',
        padding:'8px',
        margin: "25px"
    }

    const styleImage = {
        width: '90%',
        height: '150px',
        objectFit: 'cover',
        borderRadius:'8px',
       
    }

    const pStyle = {
        fontSize: '11px'
    }

    
 
    return (
        <div style={styleCard}>
            <img style={styleImage} src={img} alt="" />
            <h3>{title}</h3>
            <p style={pStyle}>{seller}</p>
            <button> See More</button>
        </div>
    )
}