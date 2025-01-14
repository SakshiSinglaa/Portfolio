import './Services.css'
import Services_Data from '../../Assets/services_data'

const Services = () => {
  return (
    <div id='services' className='services'>
        <div className="services-title">
            <h1>My Projects</h1>
        </div>

        <div className="services-container">
            {Services_Data.map((service, index) => {
                return (
                    <div key={index} className="service-card">
                        <h3>{service.s_no}</h3>
                        <h2>{service.s_name}</h2>
                        <p>{service.s_desc}</p>
                        <div className="services-readmore">
                            <a href={service.s_link} target="_blank" rel="noopener noreferrer">
                                View Project
                            </a>
                        </div>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Services
