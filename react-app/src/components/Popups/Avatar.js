import React, {Component} from 'react';
import classNames from 'classnames';
import '../../theme/css/main.css';
import '../../theme/css/adaptive.css';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import * as modelActions from '../../actions';
import AvatarEditor from 'react-avatar-editor'
import {
  changePhotoPersonalData
} from '../../api';

class Avatar extends Component {
  constructor(props) {
    super(props);
  }

  handlerUploadPhoto(e) {
    const { session } = this.props;
    const file = e.target.files[0];
    console.log("file", e.target.files[0])
    console.log("file", file)
    var data = {
      image: file
    };
    const { dispatch } = this.props;
    changePhotoPersonalData(dispatch, data);
  }

  render() {

    const { session } = this.props;

    const showPopupAvatarElement = classNames({
      'popup_avatar-elem': true,
      'show-hide': this.props.avatar,
      'show-hide-flex': !this.props.avatar
    });

    return (
      <div className={showPopupAvatarElement}>
        <div className="popup_avatar-elem_bg"></div>
          <div id="blok-avatar-elem">
            <AvatarEditor
              image="https://content.foto.my.mail.ru/vk/330806631/_musicplaylistcover/i-1.jpg"
              width={350}
              height={350}
              border={50}
              scale={1.2}
            />
            <div className="image-container">
              <div className="customer-image">
                <img src="/images/no-image.png" />
              </div>
              <div className="customer-image-button">
                <div className="register-button" id="add-avatar">
                  <p>Добавить фото</p>
                </div>
                <input name="personal-photo" id="personal-photo" required="" type="file" onChange={this.handlerUploadPhoto.bind(this)} />
              </div>
            </div>
            {/*<input value="Загрузить фото" id="upload-photo" type="file" className="register-button" onChange={this.handlerUploadPhoto.bind(this)} />*/}

            {/*<div className="image-container">*/}
              {/*<div className="customer-image">*/}
                {/*<img src={userImage} />*/}
              {/*</div>*/}
              {/*<div className="customer-image-button">*/}
                {/*<div className="register-button" id="add-avatar">*/}
                  {/*<p>Добавить фото</p>*/}
                {/*</div>*/}
                {/*<input name="personal-photo" id="personal-photo" onClick={this.handlerChangePhoto.bind(this)} />*/}
              {/*</div>*/}
            {/*</div>*/}
            {/*<input name="personal-photo" id="personal-photo" required="" type="file" onClick={this.handlerChangePhoto.bind(this)} />*/}
        </div>
      </div>
    );
  }
}

export default connect(store => ({
  dispatch: store.dispatch,
  session: store.session,
}))(Avatar);
