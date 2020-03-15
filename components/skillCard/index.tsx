import * as React from 'react'
import aboutMe from '../../utils/aboutMe';

const SkillCard =  (): JSX.Element => {
    return (
      <>
        {aboutMe.map(data => (
          <div key={data.title}>
            <div className="window m-5 flex-1">
              <div className="bar">
                <div className="btn"></div>
              </div>
              <div className="body">
                <pre>
                  <div className="comment text-gray-300 text-2xl">
                    # {data.title}:
                  </div>
                  {data.body.map(value => (
                    <div className="prompt" key={value}>
                      $ <span className="command text-lg">{value}</span>
                    </div>
                  ))}
                  <div className="prompt">
                    $ <span className="pulse">_</span>
                  </div>
                </pre>
              </div>
            </div>
          </div>
        ))}

        <style jsx>
          
          {`
       
.bar {
  background: #191919;
  height: 36px;
  border-radius: 0.5rem 0.5rem 0 0;
}

.btn, .btn::before, .btn::after {
  width: 12px;
  height: 12px;
  border-radius: 100%;
  display: block;
}

.btn {
  background: #f6b73e;
  position: relative;
  margin-left: 38px;
  top: 12px;
}
.btn::before, .btn::after {
  content: " ";
  position: absolute;
}
.btn::before {
  background: #f55551;
  margin-left: -20px;
}
.btn::after {
  background: #32c146;
  margin-left: 20px;
}

.body {
  background: #232323;
  padding: 18px;
  border-radius: 0 0 1rem 1rem;
  margin-top: 16px;
}
.body pre {
  margin: 0;
}
.body .pulse {
  -webkit-animation: pulse 1s ease-in-out infinite;
  -moz-animation: pulse 1s ease-in-out infinite;
  animation: pulse 1s ease-in-out infinite;
}

@-webkit-keyframes pulse {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
@-moz-keyframes pulse {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
@keyframes pulse {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
.command {
  color: #32c146;
}

.comment {
  opacity: 0.5;
}

        `}
        </style>
      </>
    );
}

export default SkillCard