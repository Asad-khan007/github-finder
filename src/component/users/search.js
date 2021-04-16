import React, { useState , useContext} from 'react';
import GithubContext from '../../context/github/githubContext';
import AlertContext from '../../context/alertContext/alertContext';

const Search = () => {

    const githubContext = useContext(GithubContext);
    const alertContext = useContext(AlertContext);

    const [ text, setText ] = useState('');
  
const  onChange = e => setText( e.target.value );

const onSubmit = e => {
    e.preventDefault();
    if (text==='')
    {alertContext.setAlert('Please Enter Valid User Name', 'show')} else {
        githubContext.searchUsers(text);
        setText('');
    }
};

// showBtn = () => {this.state.text.length > 0 ? true : false}
    
    return (
        <div>
                <form onSubmit={onSubmit} className='searchBar'>
                    <input type="text" name='text' placeholder='Search Users' value={text} onChange={onChange} />
                    <input type="submit" value="search" className='btn-search'/>
                </form>

                {githubContext.users.length > 0 && (
                <button className='btn-clear' onClick={githubContext.usersClear}  >Clear</button>
                ) }
            </div>
        )
    }
 
    export default Search
