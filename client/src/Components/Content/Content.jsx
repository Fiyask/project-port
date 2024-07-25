import React from 'react'
import "./content.css"
import ContentSkills from '../ContentSkills/ContentSkills'

const Content = () => {
  return (
    <div className='Content__wrapper'>
      <div className='Content__left'>
        <h1>
          Publications on <br />
          Design on Front_end 
        </h1>
        <button>
        MEDIUM PROFILE
        </button>
        </div>
        <div className='Content__right'>
          <ContentSkills 
            heading ={"Core Tools of a Startup Full stack Developer"}
            title={"A fastt paced environment is at the core of hyper dgrowth in any successful startups. As.."}
          />
          <ContentSkills 
            heading ={"Core Tools of a Startup Full stack Developer"}
            title={"A fastt paced environment is at the core of hyper dgrowth in any successful startups. As.."}
          />
          <ContentSkills 
            heading ={"Core Tools of a Startup Full stack Developer"}
            title={"A fastt paced environment is at the core of hyper dgrowth in any successful startups. As.."}
          />
          <ContentSkills 
            heading ={"Core Tools of a Startup Full stack Developer"}
            title={"A fastt paced environment is at the core of hyper dgrowth in any successful startups. As.."}
          />
          <ContentSkills 
            heading ={"Core Tools of a Startup Full stack Developer"}
            title={"A fastt paced environment is at the core of hyper dgrowth in any successful startups. As.."}
          />





        </div>

      

    </div>
  )
}

export default Content