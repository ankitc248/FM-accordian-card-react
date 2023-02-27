import { Helmet } from 'react-helmet';
import './App.css';
import './css/styles.css'
import downArrow from './images/icon-arrow-down.svg';
import boxIllustration from './images/illustration-box-desktop.svg';





function App() {
  let faqs = document.getElementsByClassName('faq');
  function clickFaq(event){
  Array.from(faqs).forEach(faq => {
      faq.classList.remove('active');
  });
  event.currentTarget.classList.add('active');
}
  return (
    <div className="App">
      <Helmet>
        <title>Frontend Mentor | FAQ Accordion Card</title>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>
      <header className="App-header">
        <main>
          <section className='image-section'>
            <div className='woman-img'>
              <img src={boxIllustration} alt='box-illustration' className='box-img' />
            </div>
          </section>
          <section className='text-section'>
            <h1>FAQ</h1>
            <div className='faq-container'>
              <div className='faq active' onClick={clickFaq}>
                <p className='faq-title'>How many team members can I invite?<img src={downArrow} alt='arrow-icon' /></p>
                <p className='faq-description'>You can invite up to 2 additional users on the Free plan. There is no limit on
                  team members for the Premium plan.</p>
              </div>
              <div className='faq' onClick={clickFaq}>
                <p className='faq-title'>What is the maximum file upload size?<img src={downArrow} alt='arrow-icon' /></p>
                <p className='faq-description'>No more than 2GB. All files in your account must fit your allotted storage space.</p>
              </div>
              <div className='faq' onClick={clickFaq}>
                <p className='faq-title'>How do I reset my password?<img src={downArrow} alt='arrow-icon' /></p>
                <p className='faq-description'> Click “Forgot password” from the login page or “Change password” from your profile page.
                  A reset link will be emailed to you.</p>
              </div>
              <div className='faq' onClick={clickFaq}>
                <p className='faq-title'>Can I cancel my subscription?<img src={downArrow} alt='arrow-icon' /></p>
                <p className='faq-description'>Yes! Send us a message and we’ll process your request no questions asked.</p>
              </div>
              <div className='faq' onClick={clickFaq}>
                <p className='faq-title'>Do you provide additional support?<img src={downArrow} alt='arrow-icon' /></p>
                <p className='faq-description'>Chat and email support is available 24/7. Phone lines are open during normal business hours.</p>
              </div>
            </div>
          </section>
        </main>
      </header>
    </div>
  );
}

export default App;
