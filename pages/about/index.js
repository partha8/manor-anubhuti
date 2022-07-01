/* eslint-disable react/no-unescaped-entities */
import styles from "../../styles/about.module.css";
import Image from "next/image";
const About = () => {
  return (
    <div className="page">
      <h2 className={styles.about}>নমস্কাৰ 🙏🏻, মই অঞ্জলী দেৱী শৰ্মা ।</h2>
      <h2>অসমীয়া ছোৱালী , অসমৰ বোৱাৰী ।</h2>
      <div className={styles.aboutContainer}>
        <div>
          <p className={styles.aboutContent}>
            জ্যোতিষশাস্ত্ৰ চৰ্চাৰ প্ৰাণকেন্দ্ৰ স্বৰূপ নলবাৰী জিলাৰ ইতিহাস
            প্ৰসিদ্ধ গন্ধিয়া গাঁওৰ এটি সৰু পৰিয়ালত জন্মগ্ৰহণ কৰিছিলোঁ । দেউতাৰ
            হাতৰ মুঠিতে হাত থৈ লিখিবলৈ শিকিছিলো । ভৱা নাছিলোঁ কেতিয়াবা face
            book , insta t লিখা মেলা কৰিম । Chamata kamrup College ৰ পৰা Degree
            লাভ কৰি , MA পঢ়া আৰম্ভ কৰোতেই সাংসাৰিক জীৱন যাত্ৰাআৰম্ভ হৈছিল ।
            জীৱনটো ব্যস্ততাৰে ভৰি পৰিছিল। অসমৰ বাহিৰলৈ গুচি আহিলো , কিন্তু
            অসমীয়া কিতাপ পঢ়িবলৈ এৰি দিয়া নাছিলোঁ । লাহে লাহে সাংসাৰিক
            ব্যস্ততা কমি গ'ল, তেতিয়া চিন্তা চৰ্চা কৰিলো Facebook ত কিবা কিবি
            লিখি গলো Facebook ত কিন্তু ৰাইজৰ সিমান সহাৰি নাপালোঁ । তাৰ পিছত
            insta ত account খুলি চুটি গল্প কবিতা ভাৱধাৰা বোৰ লিখি গলো । ভবাই
            নাছিলোঁ বন্ধু বৰ্গৰ পৰা ইমান সহাৰি পাম বুলি , দৈনিক মোৰ follower
            বাঢ়িব ধৰিলে , সকলোৱে মোক আকোঁৱালি ললে আৰু সুন্দৰ সুন্দৰ comment দিব
            ধৰিলে । মোৰ লিখা আগ্ৰহ ক্ৰমান্বয়ে বাঢ়িব ধৰিলে । লিখাটো মই অভ্যাস
            কৰি ললো । সেয়েহে মনতে ভাবিলো page এটা খুলি ৰাইজৰ আগত লিখনিবোৰ বিলাই
            দিওঁ । আশা কৰো আপোনালোকে আগ্ৰহেৰে মোৰ লিখনি আকোঁৱালি লব । <br />{" "}
            ধন্যবাদ 🙏🏻
          </p>
        </div>
        <Image
          src="/profile.jpg"
          width={400}
          height={400}
          className={styles.image}
          alt="profile"
        />
      </div>
    </div>
  );
};

export default About;
