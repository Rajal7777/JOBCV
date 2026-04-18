import html from '../images/html.svg'
import javascript from '../images/javascript.svg'
import css from '../images/css.svg'
import react from '../images/react.svg'
import node from '../images/node.svg'
import vsCode from '../images/vs-code.svg'
import git from '../images/git.svg'
import typescript from '../images/typescript.svg'

import '../styles/codeBar.css'

export default function CodeBar(){
    return(
    <div className="code-div">
             <div className="code-image">
           <img src={html} alt="html-Logo" width="100" height="100" className='light-svg' />
           <img src={css} alt="html-Logo" width="100" height="100" className='light-svg' />
           <img src={javascript} alt="html-Logo" width="100" height="100" className='light-svg' />
           <img src={typescript} alt="html-Logo" width="100" height="100" className='light-svg' />
           <img src={react} alt="html-Logo" width="100" height="100" className='light-svg' />
           <img src={node} alt="html-Logo" width="100" height="100" className='light-svg' />
           <img src={git} alt="html-Logo" width="100" height="100" className='light-svg' />
           <img src={vsCode} alt="html-Logo" width="100" height="100" className='light-svg' />
        </div>
    </div>
    )
}