import React from 'react';
import { Button, FormGroup, ControlLabel,FormControl } from 'react-bootstrap';
import FieldGroup from './Components/FieldGroup';
import './SignUpForm.css';

export class SignUp extends React.Component {

    constructor(props){
        super(props)
        this.state ={
            member_lang:'',
        }
    }
    onChange = (event) => {
        this.setState({member_lang: event.target.value});
    }
    
    onFormSubmit = (evt) =>{
        evt.preventDefault();
        const form = evt.target;
        const username = form.user_name.value;
        const password = form.user_password.value;
        const userlang = this.state.member_lang
        // this.props.addUser(username,userlang)
        this.props.socket.emit('signup',username ,password,userlang)
        
        this.props.history.push ('/home')
    }

  render(){
    return (
    <div className="SignUpForm">
      <form onSubmit={this.onFormSubmit}>
      <FieldGroup
        name="user_name"
        type="text"
        label="User Name"
        placeholder="Enter Your UserName"
        required
      />
      <FieldGroup
        name="user_password"
        type="password"
        label="Your Password: "
        placeholder="Enter The password.."
        required
      />
      {/* Hello guys.. anyone knows how we can upload photos from a form to the public/images/ and display it or react has it's own npm photo uploader? */}
      



      <FormGroup controlId="formControlsSelect">
        <ControlLabel>Choose a Language...</ControlLabel>
        <FormControl  required componentClass="select" placeholder="select" value={this.state.member_lang} onChange={this.onChange}>
            <option value="af">Afrikanns</option>
            <option value="sq">Albanian</option>
            <option value="ar">Arabic</option>
            <option value="hy">Armenian</option>
            <option value="eu">Basque</option>
            <option value="bn">Bengali</option>
            <option value="bg">Bulgarian</option>
            <option value="ca">Catalan</option>
            <option value="km">Cambodian</option>
            <option value="zh">Chinese (Mandarin)</option>
            <option value="hr">Croation</option>
            <option value="cs">Czech</option>
            <option value="da">Danish</option>
            <option value="nl">Dutch</option>
            <option value="en">English</option>
            <option value="et">Estonian</option>
            <option value="fj">Fiji</option>
            <option value="fi">Finnish</option>
            <option value="fr">French</option>
            <option value="ka">Georgian</option>
            <option value="de">German</option>
            <option value="el">Greek</option>
            <option value="gu">Gujarati</option>
            <option value="he">Hebrew</option>
            <option value="hi">Hindi</option>
            <option value="hu">Hungarian</option>
            <option value="is">Icelandic</option>
            <option value="id">Indonesian</option>
            <option value="ga">Irish</option>
            <option value="it">Italian</option>
            <option value="ja">Japanese</option>
            <option value="jw">Javanese</option>
            <option value="ko">Korean</option>
            <option value="la">Latin</option>
            <option value="lv">Latvian</option>
            <option value="lt">Lithuanian</option>
            <option value="mk">Macedonian</option>
            <option value="ms">Malay</option>
            <option value="ml">Malayalam</option>
            <option value="mt">Maltese</option>
            <option value="mi">Maori</option>
            <option value="mr">Marathi</option>
            <option value="mn">Mongolian</option>
            <option value="ne">Nepali</option>
            <option value="no">Norwegian</option>
            <option value="fa">Persian</option>
            <option value="pl">Polish</option>
            <option value="pt">Portuguese</option>
            <option value="pa">Punjabi</option>
            <option value="qu">Quechua</option>
            <option value="ro">Romanian</option>
            <option value="ru">Russian</option>
            <option value="sm">Samoan</option>
            <option value="sr">Serbian</option>
            <option value="sk">Slovak</option>
            <option value="sl">Slovenian</option>
            <option value="es">Spanish</option>
            <option value="sw">Swahili</option>
            <option value="sv">Swedish </option>
            <option value="ta">Tamil</option>
            <option value="tt">Tatar</option>
            <option value="te">Telugu</option>
            <option value="th">Thai</option>
            <option value="bo">Tibetan</option>
            <option value="to">Tonga</option>
            <option value="tr">Turkish</option>
            <option value="uk">Ukranian</option>
            <option value="ur">Urdu</option>
            <option value="uz">Uzbek</option>
            <option value="vi">Vietnamese</option>
            <option value="cy">Welsh</option>
            <option value="xh">Xhosa</option>
        </FormControl>
    </FormGroup>


        <Button type="submit" bsStyle= "success" vertical block>Sign Up</Button>
      </form>
    </div>
    )
  } };

export default SignUp;