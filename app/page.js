import Image from 'next/image'
import styles from './page.module.css'
import 'bootstrap/dist/css/bootstrap.css'
import logo from '../public/four.png'
import cell from '../public/cell.png'
import stamp from '../public/stamp.png'
export default function Home() {
    return (
        <div>
            <header>
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="menu d-flex justify-content-between align-items-center">
                                <a href="#home">
                                    <div class="imgbox">
                                        <Image width={140} src={logo} alt="four" />
                                    </div>
                                </a>
                                <nav>
                                    <a href="#services">Xidmətlərimiz</a>
                                    <a href="#about">Haqqımızda</a>
                                    <a href="#contact">Əlaqə</a>
                                    <a href="">|</a>
                                    <a href="#language">AZ</a>
                                    <i class="fa-solid fa-bars"></i>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <main>
                <section id="home">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-6 d-flex align-items-center">
                                <div class="textbox">
                                    <h1>rəqəmsal <br /> layihələr <br /> laboratoriyası.</h1>
                                </div>
                            </div>
                            <div class="col-md-6 d-flex justify-content-center align-items-center">
                                <div class="imgbox">
                                    <Image src={cell} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="services">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="txt">
                                    <h1>Xidmətlərimiz</h1>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-4 col-sm-6">
                                <div class="box">
                                    <div class="icon">
                                        <i class="fa-solid fa-laptop-code"></i>
                                    </div>
                                    <div class="textbox">
                                        <h2>Veb Saytlar</h2>
                                        <p>Biznesinizi sosial şəbəkədən veb sayta daşıyın!
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-sm-6">
                                <div class="box">
                                    <div class="icon">
                                        <i class="fa-solid fa-laptop-code"></i>
                                    </div>
                                    <div class="textbox">
                                        <h2>Mobil Tətbiqlər</h2>
                                        <p>Müştəriləriniz ilə sürətli bağlantı qurun. Xüsusi tətbiq ilə işinizi rahatlaşdırın.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-sm-6">
                                <div class="box">
                                    <div class="icon">
                                        <i class="fa-solid fa-laptop-code"></i>
                                    </div>
                                    <div class="textbox">
                                        <h2>SMM</h2>
                                        <p>Sosial şəbəkədə rəqiblərinizi qabaqlayın. Kiçik büdcə ilə böyük satışlar edin.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-sm-6">
                                <div class="box">
                                    <div class="icon">
                                        <i class="fa-solid fa-laptop-code"></i>
                                    </div>
                                    <div class="textbox">
                                        <h2>Brendinq</h2>
                                        <p>Markalar arasında öz stilinizi yaradın. Hamıdan seçiləcəksiniz!
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-sm-6">
                                <div class="box">
                                    <div class="icon">
                                        <i class="fa-solid fa-laptop-code"></i>
                                    </div>
                                    <div class="textbox">
                                        <h2>SEO</h2>
                                        <p>Veb saytınız Google axtarışda hər zaman zirvədə olsun!
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-sm-6">
                                <div class="box">
                                    <div class="icon">
                                        <i class="fa-solid fa-laptop-code"></i>
                                    </div>
                                    <div class="textbox">
                                        <h2>Layihələndirmə</h2>
                                        <p>İdealarınızı bizimlə paylaşın, həyata keçməsinə yardım edək.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="about">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-6 d-flex align-items-center">
                                <div class="textbox">
                                    <h1>Haqqımızda</h1>
                                    <p>Four Projects yeni yaradılmış, rəqəmsal dünyada fərq yaratmağı hədəfləyən peşəkar
                                        mütəxəssislərdən ibarət laboratoriyadır. Qabaqcıl xidmətlərimiz ilə biznesinizi rəqəmsal
                                        platformalarda zirvəyə daşıyacağıq. Yaradıcı komandamız layihələrə başlayarkən hər
                                        müştərinin istək və hədəflərini ön planda tutaraq, məqsədlərinə çatmağa kömək olacaq.
                                        Müştəri məmnuniyyəti və əməkdaşlarımızın uğurları hər zaman prioritetimiz olmuşdur.
                                        <br /><br />
                                        Yaradıcılıq və yenilik bizim DNA'mızın bir parçasıdır. Xəyallarınızı gerçəkləşdirmək
                                        üçün buradayıq!
                                    </p>
                                </div>
                            </div>
                            <div class="col-md-6 d-flex justify-content-end justify-content-sm-end">
                                <div class="imgbox">
                                    <Image src={stamp} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="contact">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="txt">
                                    <h1>Əlaqə</h1>
                                    <h4>Layihənizi Four Projects-ə əmanət edin! Yararlanmaq istədiyiniz xidmətlərimizi seçin və
                                        fikirlərinizi ətraflı təsvir edin. Ən qısa müddətdə geri dönüş alacaqsınız. </h4>
                                    <h2>Xidmətlərimiz</h2>
                                    <ul>
                                        <li>
                                            <h3>Veb Sayt</h3>
                                        </li>
                                        <li>
                                            <h3>Mobil Tətbiq</h3>
                                        </li>
                                        <li>
                                            <h3>SMM</h3>
                                        </li>
                                        <li>
                                            <h3>Brendinq</h3>
                                        </li>
                                        <li>
                                            <h3>Digər</h3>
                                        </li>
                                    </ul>

                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                <form action="#" method="POST">
                                    <h2>Məlumatlarınız</h2>
                                    <div class="formBox d-flex align-items-center">

                                        <input type="text" id="ad" name="ad" placeholder="Adınız" required />

                                        <input type="email" id="email" name="email" placeholder="Email adersiniz" required />
                                    </div>

                                    <textarea id="mesaj" name="mesaj" rows="4" cols="50"
                                        placeholder="Layihəniz haqqında qısa məlumat" required ></textarea><br /><br />

                                    <input type="submit" value="Göndər" />
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
                <hr />
            </main>
            <footer>
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="box d-flex justify-content-between">
                                <div class="left">
                                    <div class="imgbox">
                                        <Image width={100} src={logo} alt="footer-logo" />
                                    </div>
                                </div>
                                <div class="right d-flex">
                                    <div class="social">
                                        <div class="textbox">
                                            <h2>Sosial</h2>
                                        </div>
                                        <ul>
                                            <li>
                                                <a href="https://instagram.com/fourprojcts">
                                                    <i class="fa-brands fa-square-instagram"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.facebook.com/fourprojcts">
                                                    <i class="fa-brands fa-square-facebook"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://x.com/fourprojcts">
                                                    <i class="fa-brands fa-square-x-twitter"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="contact">
                                        <div class="textbox">
                                            <h2>Əlaqə</h2>
                                            <h4>info@four.az</h4>
                                            <h4>+994 70 633 44 40</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="txt">
                                <h3>© 2023 - Four Projects - Bütün hüquqlar qorunur</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}
