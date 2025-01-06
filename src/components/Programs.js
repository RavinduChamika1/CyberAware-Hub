import React, { useEffect, useState } from "react";
import { auth, db } from "./firebase";
import { doc, getDoc } from "firebase/firestore";

function BlogHomepage() {
  const [userDetails, setUserDetails] = useState(null);

  const fetchUserData = async () => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        const docRef = doc(db, "Users", user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setUserDetails(docSnap.data());
        } else {
          console.log("No such document!");
        }
      } else {
        console.log("User is not logged in");
      }
    });
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  async function handleLogout() {
    try {
      await auth.signOut();
      window.location.href = "/login";
      console.log("User logged out successfully!");
    } catch (error) {
      console.error("Error logging out:", error.message);
    }
  }

  const blogPosts = [
    {
      title: "Cybersecurity Framework | NIST",
      description:
        "Helping organizations to better understand and improve their management of cybersecurity risk.",
      imageUrl:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAdVBMVEX///8AAACzs7Pn5+e8vLz6+vqnp6cODg7i4uK4uLjq6uru7u6vr6/e3t57e3vZ2dnR0dHDw8MeHh6YmJhkZGT19fVLS0uCgoJycnLMzMw6OjooKChTU1M1NTWQkJB/f38YGBg/Pz9sbGxNTU1aWlouLi6JiYm9JzipAAADXElEQVR4nO3a13ajMBhFYXCLC+5xTZkk4+T9H3FsigpIogQvrFn7uwNkRTqOQfwQBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADQ2HwwWffL2kS91G1rnG1FWqP+uvd70fhe86xsvAgT7ztXs1GYuW0NxNZQtJgewnb07jzjUj/KYCJHO5HJ023LkMmflhIJw8ndJ+2210azsDcsyWS6aS2SrjPZ54ZzsLZ0ZzJrL5GuM9kWxrO1NXVn8vHfZLIzDMh2TnFmsjB05GkmxX+Tq7W5rSuTfquRdJvJm3FIK2NbVyZtXYQfIJOhZUzGNZMrk3Yj6TSTqRjFSD8jzAyNHZmMxcamxhJ0LT7V0nRaITO5LuyflUw+hsXGjkzk7Mw/OzPTUrh7MpPb16suVb6LjR2ZRI2+cR8y0c64+0JjRya9RrPzIpOhujy/5Bs7MjmJjTp3b15koi/Qj7nGjkyUz0V9q2muQz8y0dde73pj17W44v3feate0DzJJFiqUxhpjV2ZGNfDRkdZo/ElE+WyGubWTq5MTPdNNqesQ28yUa4h6viDknvAUVjdIO3Qn0z038FS7nfXCl5rhJJ26lEmWjEylJXrkjqb+XbSLPmET5kER3X84pxYVo9V7w1KJFe0R89kru2/KOPfZAMurVFPqocSWLp4ALZMgk9l/Od0X2km151V/1cG1i46Z80keFEm8JrsqpDJ1cy+jl3K8/DC1UW3ZCbL3JHdkxLKV7yrWiZOYrn72biLu7NnohwK0wccLWQiLvMvjbu4O0cmwVwN5faAo4VMRBebxl3cnbyfLWYSrNRQInsmNf6eqFq96V14k4ky5vB2pRCrlvhLlvdFJ8NHzeQK+Uvv359MbDcx8Qlybj5WUXzH/eiZmGvL5hJA8kj5V5nEZRQ/MzE/8kx+LDWW8gXPcQ+eZmKa+UtyZFU8UllShfQ1k+BvYULZOfVSOFJVWr979EzsF498DUC8oGJ7sFoqe+/H30yG39qElGq+ttSt7if7vL+Z6OUUrWy9q1Ncy8g3OXzOJFhmZ9pD/tn6qXi6cTqrL/zIessjZTIUL7nmn0flrSa9Qb6eENudqr/3etLfNbW8YgsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAjfwDaM0iXwgn0eAAAAAASUVORK5CYII=",
      learnMoreLink: "./NIST",
    },
    {
      title: "International standard for information security management",
      description:
        "ISO 27001 sets out a framework for all organisations to establish, implement, operate, monitor, review, maintain and continually improve an ISMS (information security management system).",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi1PrlV6apvxfQ1PUBOR4fcHkRJLht-CJGDg&s",
      learnMoreLink: "./ISO",
    },
    {
      title: "General Data Protection Regulation",
      description:
        "The General Data Protection Regulation, abbreviated GDPR, or French RGPD is a European Union regulation on information privacy in the European Union and the European Economic Area",
      imageUrl:
        "https://static.vecteezy.com/system/resources/previews/002/472/896/original/gdpr-general-data-protection-regulation-background-free-vector.jpg",
      learnMoreLink: "./GDPR",
    },
    {
      title: "The privacy of personally identifiable health information.",
      description:
        "The terms of HIPAA required the Secretary of HHS to submit detailed recommendations to Congress by August 1997 on ways to protect the privacy of personally identifiable health information.",
      imageUrl:
        "data:image/png;base64,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",
      learnMoreLink: "#",
    },
    {
      title: "The Payment Card Industry Data Security Standard (PCI DSS)",
      description:
        "Widely accepted set of policies and procedures intended to optimize the security of credit, debit and cash card transactions and protect cardholders against misuse of their personal information.",
      imageUrl:
        "data:image/png;base64,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",
      learnMoreLink: "#",
    },
    {
      title:
        "MITRE ATT&CK (Adversarial Tactics, Techniques and Common Knowledge)",
      description:
        "Framework, set of data matrices, and assessment tool developed by MITRE Corporation to help organizations understand their security readiness and uncover vulnerabilities in their defenses.",
      imageUrl:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOIAAACUCAMAAAC5tQU5AAAAulBMVEX///8BYpnGQSgAXpf5/P14ob/e6O8AYJhMeqcAWZQAVJHj7vTE2OWEqsbFPCDx9/rYhXZpmLs8eafR4ewAQ4jDMw/S5u7emov57erLVTf++/fz2tLsx8HPbFvGRizEOBvUeWvLW0fBKADakIXjqZ4xb6AATI2txdeiutD14t3OZVNnj7S2zt9Uh6/oua6+EwDKVD6Hob4uZZoAM4KStMxYkLU/gq14lrgedaZQc6PbkH3Xhn/ISzbISCSKtOb0AAANwklEQVR4nO1aaXuivBpGQCmigHUYOYCiiAtWqe3pdDbf//+3ThayASqMmffDubi/tJKQ5M6z5gmK0qFDhw4dOnTo0KFDhw4dOnTo0KFDhw4dOlSgU7TuIzzW7+FGn6vTNeh8H9a4TzC91mc6oX2cuseTnaIM2Dj12OmKM7nSNt6P+IH31/qhyY5tSY56poYxfLvW5xvpomn8NoyGxcPtGPzYsE51MPu6Yg2vtfben/ojMq4+udoPLdOpWeIt7LReAe1pUN/l67tB+gx3PEWTPEUU6UB1MLQxoGga15oNwzQ/p5TijZGGby2lqI9NNs++vs8HW5jZv07x2vIxMMWbu2CaO/0vUHQmbFrzxarrYp2YfLQff48i6DMcO4jirX6tKVo/2PqN3qiuy67HFm+Y3PjSKUItcaRLccDPCl1CBc4b32XLCbpE8fbim1E0jL1+R4pmW4pHfsMMrUZTpxuNk8+Qs1eRovmFgo6pbdnDicNR1EwOQ84LaZspL8UvVfz3e0uPOhZ0YvhR6aB/iD3GVyg6XxkmhfIbzyP2EOwepah9Tjj0P3uM5BBIm0jR0Lj3+YFa4SS6eq3SwXoWtEZ7vkKR35U+pShmE5RiaSv1aZ/au7axOIpt6dRA74lO4sux3ONYMv13pibXKDp94x7Fccme9A/SZAxHClFUKRStLyIB7VS25W8l0zeZ15VIUdFPtG0nV4rHba+EUqJacYIa8zcyKSqjLRtMqhT7ohoawLeLHcblEGWwDlIpOsRkzG9Spah/VoQkrsrplTNP7USNUSpFfcNRlChFp1dJSTQhUd1XgjCXrEuWYu+vSHGqVSiaL1xk1U+V44PxTp2uXFskFjHsS5XijrpqRoFPVEfv1RMSO49I9ajf/pJH7bPDokFYmtz0b7SdNvc0mshKpOiM/1ZcfCEUtNOGpRfU2KbPrP1E2+mRSx7FKY2KwL1x2Y3xMMUBpWAe91RgLNPe9yh2e7YFZN2PUFSmH3uC8eeQhSZ42mGKOnCqaHXQoGc8YIAOm2RTOBzrhabNT9aONBs94m8eorj/Yg4JOIPXNsAV0JOGMalB7aH2GnZs4CmXqQ2LQUZs4gk4U1FjJVJ+jGIlr8KDg3M/d140qxDKR3cxZqZmMa/dM0+oVWepj3ZUrCdCcUgqjdIoMn8+BAu5feo3tDYU9e9kShMcM/UfTIzIyh0aNE2QnOvUNZnfZFOk2J7u125aURyQwG4YH8CG2aQmWjL7vYWqSd06dbmSKRoanlemFGnp09hADzKgCmNsoBhZ2B/CvT0yAyG2KpOipvWeCj92U4rtKB4JJ5x7O8z2jB13uukNJ7D3V6bHe7kUDU0zjc3LnmSOnBSNKsw2FPdcTECUaQVFA7Y5oULcIqmxAsGwL5eitjn19yMW5eXZotOn3uYFPaC2CTR1NKVFQ+0Zby+NKqR+8xDFHbP80cAS4jmVomEcp1W0KMBZNGsi5+APZm4fYy7bwfNzp+PB4xQdqo3apLQwXVoaPqXexijsnLt64dJu4kBZoQpr7oM5qvVElaiUscqjeCRxzyAkWOzjwrFJIv2AUixqhA+m4cyha3uBoy7rpMFqwNozmWFXczzsEfPWaZGjSH8ePWnsqHd7F2qb0qSoM2/zjS6uevfCFTI+mTfSZVBkGaIpdJQmRYcaHleb7lfyCq4kx0r/piWDoqLTSrv5zJdTZEnRoinolh1PvpbTKuOdNbL8ZniUQlGxDPrkxFOUJEXmIIfcQD9K1qhxU7MMDyeTEk79I2bf7P5ZmhRZWv2D82cfJU3lT2fsBgcTl0BR/6BunblVaVL8rHobuArxqwSNu6Xhklic8Mio3Ti0Qqa97whvWVKkWrfli8P6m3idyGce+p4WHN6nkigq0+dKUUiWFHV6J7UViiF03TVtLE9HwVJOBY5NSNwqk6JR85lM88+n6J2U0RO2ynnhOJriXdyUafFYGkUuIR9+ihSr1xG9arp3HdSvmJ9i6s5fY2zFg8uAJe4TR14dlZ2dtjgluHVe1Jp/sTGpn04QlbYRbcH5zlyqJY8iO/JgtyrpuxuHWvmw9M2Uzm4BzHHpbMauq2G5U1o1nFXdjfedtO9uBu/0lXLplX5KxIrCtIlWd6C/kVfw33FfM4x4zX2E4pHuW/nqG0T4os08lR0a+0RK+9BlXtuw3Bi6VTkU3+gnmqdK7BmTbyUrn/2BYyx57cURP9YUKJJeZYrkherlG/sedLtx7nys2YyiPn4iKNsbUOKfuOWl8g2u80Zfm1jAMRX//xQ/o3Ho4C+iGljP5IV9eZkWHRiMNv75dAOVd69QtAYENdWeoqUmtWCvWbqiXxvD4joJs7K3b4x8DxK+4ujQoUOHDh3+FfhRnofBnU5BFuZ5HmX3+rEXHlwVhL923WXIfmduHdIrDcuoeC10VQ/gMvNvzBW6Kxv28uLLMhI75nC0nCeUovFvDdcU0avnJUuOYpx4FSQu6BhXn3tJil4K0tfEVgHsxI7q51GC6PCaxCqG7b2qM16WazBrMuMewHV5r6kEhsHSAzNemBizhVpF/AvMWfNcjdEaglnCnsR57UTh0ouFV+3knDIZzUCjx1EMz2DLvLUMPc08tK4Ze6DGNkSxDgwPUSx+8C0eopjjJQOARvsc1syTnz0sPdgrwWzjeJldoei78PdchpoqeP/jOZ0ruywwEJHif3sNKJIGm2+AIvOXYD3xKg/D9Az/+13Z+yBVY7QLFzeNwih3z1hlvQOZt0QxRXt1TedbwV8UQqGjBX6BA5wlIr9gX4zsP6BhQRrgooB8VRtvUriKVXtVEWMaw2mSRe4HxSTRChlvTDiKFMMLnLxe49siL4zIq7iuYI4oVl/xEUWeRZqwBzlsLK8t9+BYtmBZQXqBgvQK/REo+isPGuIDvDgcYjVeuuU1oyU0pgidjb0qVgfdhF3ygyEkY5/zkv5GB2D16ismLlB0EyhfGa4Ge0kvz+qcVxuKHqBYaAGiKEoxmENPs6gOlc0Xl8sFD4UopngN0SuY+ZJV+v8R1jFygECW9qKkqS0VlYSdaFFhA1esJnURLosgEBdIMcYUwxXYJU+OISoZGMxzfWSR5TW0oBjBnljJArfqblZQQIc7S2FSzMCGq0IW8AjSwjf4wCbihdjWgqI/h1oAuwYz0BYvheWF0KN5dbGSB5Wi73p13u8PAeOZjbw2HPZVXEULiiD025BjEC4BHbukp2u4ZPfeWihFqPU1YecPAZ1N/Bv9V11GG4rQ4aje2bU9mL+IGo/ia3I3iBOKEYyIqpSYDxcGZYe33If6r4rLbkERD2XD6BdzuSBCeIEB4657RLboBhmMiLWu6Y+QQfUq4hlUD3Fx7SjOvCKFuODo58/SNF1Dg4IuNr5vWpiiAg8F3lySq8G0yIZF/6iFWdJVt6AYzsnxYV0MsfZsO0FLhS7N+9WMYpoChvE/kiIiwD/QSIq5UWYvhOwWoT+16TGw4AKt3MaKD32sdz8EQIrqYaFKNEQckb05+YU22+VW0pgiyN+gh7BRpo3JoENowat8ELwCRDGGY8SyQqKizGGEpXJDKcWFY9SYItR34GoOMzigjTQfBpG4cPxps6MtpHhZpyhNkJTYKCFKjamNBDAX53OKphQzxDBOM5ByIrea4/yE5OIt3I2ao+hlJ/LSU1U9rykOUFFWbPCmFFG4wFacLSA1Nco9znfBo1+DnJro8zqR5lJheoq2nwC5C6a4TSn6MFQTvxyiwsbiAo0y5cdpFvohRf/glcPXnyIVa0WktnSm+9eQYiScpyNSRIipH1NQ5rO8JxfqlaQd+FG5hdSbuLIT2+6GFFNbyEYIx4S5I5SGJ03ScOx44YixhCQVL+W84oELHKRHQ4oo7HF7nqMckw2joMrCffNiFHHx7eGjBkq44nkU8kBJGPVmLaQoePklqjrx5UEsxrq808+yzM98kaKSXVC28CBF5GzKJRZf5YduSBGWUPlYgw4WKjpoE+BqtFo1r3B5AFixwsaMK2x4DyY56FB2Kes7rKnapCrUkCIsnscHrqpd+Bs+2uNgUqnLhQeQyNp15ak5XIj6UOTwUUW3ckwNF9xuN42L0G8lv8hychuVE6FoOY7I8u3E5e0ryGOPU2mBYoAiB/XCQQj0GV56+XdvvtiUqNZQWT6qKcTFQppSxHWLX7AGHPjI2diHJeKZsgCUItbeKs9IqThcerdKxWfekPz14ncar6GaNc57UIJ1ru4ISkuKRLVxjuoib3KY5Xnqxij0RziVU5mtB2mM0+zDOo2iKE+XF2SfCQ0O5YJ/zBf8/XmWrVTwR23qZ/1rVb/swE4+jSn60HLUGNhV7JEMKYPptM3dUQXRIkEpgRcvLgvVQyIEJ8qr1zbomoT45WCehb/cMJwfmlJEbsWu640qKFh3mp8Xs2Vi0/zIxleCGThCesK5GfSip8rCI9mzu5dvxZSA4jp009RtqKjAwYEjee2NQQSbXtHmA5MHYqmlCBqEOk8wiz28bPZG5CUHcT1BtPJishe27cX83TRI88Ca+JNingC1wEsBkSgL54o6D5cNKUZLgHlt52AGm/Cxdg271eRRvgsbxNez2Qp648VqTZ9HNflJ9Gt1QV57cT6kYnMKJ0559zCbg0dYM4OZn82UPPdvXrP/bfjAh4A1cE9q/bsfon7Nv2eQVgHo0KFDhw4dOnTo0KFDhw4dOnTo0KFDhw4d/i/wP9Ibh76tZtibAAAAAElFTkSuQmCC",
      learnMoreLink: "#",
    },
    {
      title: "What is the ITIL 4 Foundation?",
      description:
        "ITIL 4 Foundation introduces an end-to-end operating model for the creation, delivery and continual improvement of technology-enabled products and services.",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnxCKtF1cBwSi6j12qCfgAHlRW9I0KgQmbtA&s",
      learnMoreLink: "#",
    },
  ];

  return (
    <div>
      <header style={styles.header}>
        <div className="logo">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQg__AzXw2m6KyNZ85Qu8F0PR5NXBcviPks7-bLZ9ZBu1Gj89A"
            alt="Logo"
            style={{ width: "50px" }}
          />
        </div>
        <nav>
          <ul style={styles.navList}>
            <li style={styles.navItem}>
              <a href="./profile">Home</a>
            </li>
            <li style={styles.navItem}>
              <a href="./Programs">Frameworks</a>
            </li>
            <li style={styles.navItem}>
              <a href="./Policys">Security Policy</a>
            </li>
            <li style={styles.navItem}>
              <a href="./Quiz">Quiz</a>
            </li>
            <li style={styles.navItem}>
              <a href="./Dashboard">Dashboard</a>
            </li>
          </ul>
        </nav>
        <button
          className="btn btn-primary"
          onClick={handleLogout}
          style={styles.logoutBtn}
        >
          Logout
        </button>
      </header>

      {/* Blog Posts Section */}
      <section style={styles.blogSection}>
        <h2 style={{ textAlign: "center" }}>Cybersecurity Frameworks</h2>
        <br></br>
        <div style={styles.blogGrid}>
          {blogPosts.map((post, index) => (
            <div key={index} style={styles.blogCard}>
              <img
                src={post.imageUrl}
                alt={post.title}
                style={styles.blogImage}
              />
              <h3>{post.title}</h3>
              <p>{post.date}</p>
              <p>{post.description}</p>
              <a href={post.learnMoreLink} style={styles.learnMoreBtn}>
                Learn more
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 0",
    backgroundColor: "#f5f5f5",
    paddingLeft: "20px",
    paddingRight: "20px",
  },
  navList: {
    display: "flex",
    listStyle: "none",
    gap: "20px",
  },
  navItem: {
    marginRight: "20px",
    fontWeight: "bold",
    letterSpacing: "0.05em",
    textTransform: "uppercase",
    color: "#007bff",
    textDecoration: "none",
    cursor: "pointer",
  },
  navItemHover: {
    textDecoration: "underline",
  },

  logoutBtn: {
    background: "#007bff",
    color: "#fff",
    border: "none",
    padding: "10px 20px",
    cursor: "pointer",
  },
  blogSection: {
    padding: "50px",
  },
  blogGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "20px",
  },
  blogCard: {
    border: "1px solid #ddd",
    padding: "20px",
    borderRadius: "5px",
    backgroundColor: "#fff",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
  blogImage: {
    width: "100%",
    height: "auto",
    borderRadius: "5px",
  },

  learnMoreBtn: {
    display: "inline-block",
    padding: "10px 20px",
    backgroundColor: "#007bff",
    color: "#fff",
    textDecoration: "none",
    borderRadius: "5px",
    marginTop: "10px",
  },
};

export default BlogHomepage;
