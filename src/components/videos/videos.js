
import React, { useState, useEffect } from 'react';
import "../../stylee.css";
import { Link, navigate } from "gatsby";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope,faPlay} from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import EvlonPopUp from '../Allvideospopup/Evlonpopup/evlonpopup';

export default function Videos() {
    const evlonurl='https://www.qlspace.com.au/wp-content/uploads/2023/03/1678093494570.mp4';
    const livewinnerurl='https://www.youtube.com/embed/yAH4u6hkXBg?autoplay=1';
    const thinkingsouthurl='https://www.youtube.com/embed/gVr2E14L9yY?autoplay=1';
    const thinkingcritical='https://www.youtube.com/embed/n-tgVp9db14?autoplay=1';
    library.add(faEnvelope,faPlay)
    const [isOpen, setIsOpen] = useState(false);
    const[popUpUrl, setPopUpUrl]=useState('');
    const handleOpenModal = (url) => {
      setIsOpen(true);
      setPopUpUrl(url);
    }; 
  
    const handleCloseModal = () => {
      setIsOpen(false);
    };
    return (
        <div>
            <section class="new00">
                <div class="secation01 bhg secn_abouts">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="our_main_heading text-center">
                                    <div class="bread_cumg">
                                        <h1 class="text-center"><strong>Our  </strong>Videos</h1>
                                        <p>Get the latest updates and helpful information</p>
                                    </div>
                                </div>
                                <div class="img_arrow">
                                    <div class="roww_wrap">
                                        <a href="#"><img src="https://www.qlspace.com.au/wp-content/themes/qls/assets/image/arrow.svg" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="section">
                <div class="whats_new_page">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="list_tab_wg">
                                    <ul>
                                        <li ><Link to='/app/event.js'>Events</Link></li>
                                        <li><Link to='/app/whatsnew'>News</Link></li>
                                        <li><Link to='/app/blog'>Blogs</Link></li>
                                        <li><Link to='/app/partner'>Partner News</Link></li>
                                        <li class="active_cl"><Link to='/app/videos'>Videos</Link></li>
                                    </ul>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="list_mnbv">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="our_lkhb">
                                    <div class="imh_bc">
                                        <div class="inner_ghv">
                                            <img src="https://www.qlspace.com.au/wp-content/uploads/2023/03/imgpsh_fullsize_anim-8.jpg" />
                                            <div class="video_incon_wrap" id="343" data-videourl="https://www.qlspace.com.au/wp-content/uploads/2023/03/1678093494570.mp4">

                                                <div class="icon_fgb" onClick={() =>handleOpenModal(evlonurl)} >
                                                <FontAwesomeIcon icon={faPlay} />
                                                </div>

                                            </div>
                                        </div>
                                        <div class="date_wrad_news">
                                            <div class="date_rn">
                                                <div class="date_icon"><span><img src="https://www.qlspace.com.au/wp-content/uploads/2023/03/icon-_calendar-outline_.png" /></span>23 March 2023</div>
                                            </div>
                                            <div class="oir_amin">
                                                <div class="uhgbv"><span><img src="https://www.qlspace.com.au/wp-content/uploads/2023/03/userfv.png" /></span> Admin</div>
                                            </div>
                                        </div>
                                        <div class="heading_nmb">
                                            <h4>
                                                <a href="https://www.qlspace.com.au/videos/avalon-2023-australian-international-airshow/">
                                                    AVALON 2023 – Australian...    </a>
                                            </h4>
                                            <div class="next_page">
                                                <a href="https://www.qlspace.com.au/videos/avalon-2023-australian-international-airshow/">Read More <span><img src="https://www.qlspace.com.au/wp-content/uploads/2023/03/arrowright.png" /></span></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-6">
                                <div class="our_lkhb">
                                    <div class="imh_bc">
                                        <div class="inner_ghv">
                                            <img src="https://www.qlspace.com.au/wp-content/uploads/2023/04/32_546.jpg" />
                                            <div class="video_incon_wrap" id="340" data-videourl="https://www.youtube.com/embed/n-tgVp9db14">

                                                <div class="icon_fgb" onClick={() =>handleOpenModal(livewinnerurl)} >
                                                <FontAwesomeIcon icon={faPlay} />
                                                </div>

                                            </div>
                                        </div>
                                        <div class="date_wrad_news">
                                            <div class="date_rn">
                                                <div class="date_icon"><span><img src="https://www.qlspace.com.au/wp-content/uploads/2023/03/icon-_calendar-outline_.png" /></span>23 March 2023</div>
                                            </div>
                                            <div class="oir_amin">
                                                <div class="uhgbv"><span><img src="https://www.qlspace.com.au/wp-content/uploads/2023/03/userfv.png" /></span> Admin</div>
                                            </div>
                                        </div>
                                        <div class="heading_nmb">
                                            <h4>
                                                <a href="https://www.qlspace.com.au/videos/thinking-critical-sa-ql-space/">
                                                    Thinking Critical SA: QL Space    </a>
                                            </h4>
                                            <div class="next_page">
                                                <a href="https://www.qlspace.com.au/videos/thinking-critical-sa-ql-space/">Read More <span><img src="https://www.qlspace.com.au/wp-content/uploads/2023/03/arrowright.png" /></span></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="our_lkhb">
                                    <div class="imh_bc">
                                        <div class="inner_ghv">
                                            <img src="https://www.qlspace.com.au/wp-content/uploads/2023/04/31_546.jpg" />
                                            <div class="video_incon_wrap" id="340" data-videourl="https://www.youtube.com/embed/n-tgVp9db14">

                                                <div class="icon_fgb" onClick={() =>handleOpenModal(thinkingsouthurl)}>
                                                <FontAwesomeIcon icon={faPlay} />
                                                </div>

                                            </div>
                                        </div>
                                        <div class="date_wrad_news">
                                            <div class="date_rn">
                                                <div class="date_icon"><span><img src="https://www.qlspace.com.au/wp-content/uploads/2023/03/icon-_calendar-outline_.png" /></span>23 March 2023</div>
                                            </div>
                                            <div class="oir_amin">
                                                <div class="uhgbv"><span><img src="https://www.qlspace.com.au/wp-content/uploads/2023/03/userfv.png" /></span> Admin</div>
                                            </div>
                                        </div>
                                        <div class="heading_nmb">
                                            <h4>
                                                <a href="https://www.qlspace.com.au/videos/thinking-critical-sa-ql-space/">
                                                    Thinking Critical SA: QL Space    </a>
                                            </h4>
                                            <div class="next_page">
                                                <a href="https://www.qlspace.com.au/videos/thinking-critical-sa-ql-space/">Read More <span><img src="https://www.qlspace.com.au/wp-content/uploads/2023/03/arrowright.png" /></span></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="our_lkhb">
                                    <div class="imh_bc">
                                        <div class="inner_ghv">
                                            <img src="https://www.qlspace.com.au/wp-content/uploads/2023/03/imgpsh_fullsize_anim-5.jpg" />
                                            <div class="video_incon_wrap" id="340" data-videourl="https://www.youtube.com/embed/n-tgVp9db14">

                                                <div class="icon_fgb" onClick={() =>handleOpenModal(thinkingcritical)}>
                                                <FontAwesomeIcon icon={faPlay} />
                                                </div>

                                            </div>
                                        </div>
                                        <div class="date_wrad_news">
                                            <div class="date_rn">
                                                <div class="date_icon"><span><img src="https://www.qlspace.com.au/wp-content/uploads/2023/03/icon-_calendar-outline_.png" /></span>23 March 2023</div>
                                            </div>
                                            <div class="oir_amin">
                                                <div class="uhgbv"><span><img src="https://www.qlspace.com.au/wp-content/uploads/2023/03/userfv.png" /></span> Admin</div>
                                            </div>
                                        </div>
                                        <div class="heading_nmb">
                                            <h4>
                                                <a href="https://www.qlspace.com.au/videos/thinking-critical-sa-ql-space/">
                                                    Thinking Critical SA: QL Space    </a>
                                            </h4>
                                            <div class="next_page">
                                                <a href="https://www.qlspace.com.au/videos/thinking-critical-sa-ql-space/">Read More <span><img src="https://www.qlspace.com.au/wp-content/uploads/2023/03/arrowright.png" /></span></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="pagination">
                            </div>

                        </div>
                    </div>
                </div>

            </section>
            <section>
                <EvlonPopUp
                    isOpen={isOpen}
                    onClose={handleCloseModal}
                    videoSrc={popUpUrl}
                />
            </section>
            

        </div>
    )
}


