async function loadCSV() {
  const data = await d3.csv("data/all.csv", function(d) {
    return {
      Year: +d.Year,
      Name: d.Name,
      Plate_Count: +d.Total,
      Index_Name: d.indexName,
    }
  })
  console.log(data)
};

loadCSV();


let nameOne = [
  {
    Year: 1718,
    Name: "John Talman",
    Plate_Count: 4
  },
  {
    Year: 1720,
    Name: "John Talman",
    Plate_Count: 2
  },
  {
    Year: 1721,
    Name: "John Talman",
    Plate_Count: 2
  },
  {
    Year: 1723,
    Name: "John Talman",
    Plate_Count: 4
  },
  {
    Year: 1724,
    Name: "John Talman",
    Plate_Count: 4
  },
  {
    Year: 1725,
    Name: "John Talman",
    Plate_Count: 3
  },
  {
    Year: 1726,
    Name: "William Bogdani",
    Plate_Count: 6
  },
  {
    Year: 1727,
    Name: "William Bogdani",
    Plate_Count: 1
  },
  {
    Year: 1729,
    Name: "William Bogdani",
    Plate_Count: 6
  },
  {
    Year: 1730,
    Name: "William Bogdani",
    Plate_Count: 1
  },
  {
    Year: 1731,
    Name: "William Bogdani",
    Plate_Count: 3
  },
  {
    Year: 1732,
    Name: "William Bogdani",
    Plate_Count: 2
  },
  {
    Year: 1733,
    Name: "William Bogdani",
    Plate_Count: 3
  },
  {
    Year: 1734,
    Name: "William Bogdani",
    Plate_Count: 2
  },
  {
    Year: 1735,
    Name: "William Bogdani",
    Plate_Count: 1
  },
  {
    Year: 1736,
    Name: "William Bogdani",
    Plate_Count: 1
  },
  {
    Year: 1737,
    Name: "William Bogdani",
    Plate_Count: 3
  },
  {
    Year: 1738,
    Name: "William Bogdani",
    Plate_Count: 6
  },
  {
    Year: 1739,
    Name: "William Bogdani",
    Plate_Count: 2
  },
  {
    Year: 1740,
    Name: "Charles Frederick",
    Plate_Count: 1
  },
  {
    Year: 1741,
    Name: "Charles Frederick",
    Plate_Count: 5
  },
  {
    Year: 1742,
    Name: "Thomas Birch",
    Plate_Count: 1
  },
  {
    Year: 1743,
    Name: "Thomas Birch",
    Plate_Count: 2
  },
  {
    Year: 1744,
    Name: "Thomas Birch",
    Plate_Count: 3
  },
  {
    Year: 1746,
    Name: "Thomas Birch",
    Plate_Count: 1
  },
  {
    Year: 1747,
    Name: "John Ward",
    Plate_Count: 1
  }
];

let nameTwo = [
  {
    Year: 1747,
    Name: "John Ward",
    Plate_Count: 2
  },
  {
    Year: 1750,
    Name: "John Ward",
    Plate_Count: 2
  },
  {
    Year: 1751,
    Name: "John Ward",
    Plate_Count: 1
  },
  {
    Year: 1752,
    Name: "John Ward",
    Plate_Count: 4
  },
  {
    Year: 1753,
    Name: "John Ward",
    Plate_Count: 3
  },
  {
    Year: 1754,
    Name: "John Ward",
    Plate_Count: 1
  },
  {
    Year: 1755,
    Name: "John Ward",
    Plate_Count: 2
  },
  {
    Year: 1756,
    Name: "John Ward",
    Plate_Count: 1
  },
  {
    Year: 1757,
    Name: "John Ward",
    Plate_Count: 1
  },
  {
    Year: 1758,
    Name: "John Ward",
    Plate_Count: 1
  },
  {
    Year: 1763,
    Name: "John Taylor",
    Plate_Count: 1
  },
  {
    Year: 1765,
    Name: "John Taylor",
    Plate_Count: 4
  },
  {
    Year: 1767,
    Name: "Greogry Sharpe",
    Plate_Count: 1
  },
  {
    Year: 1768,
    Name: "Greogry Sharpe",
    Plate_Count: 1
  },
  {
    Year: 1769,
    Name: "Greogry Sharpe",
    Plate_Count: 1
  },
  {
    Year: 1770,
    Name: "Greogry Sharpe",
    Plate_Count: 1
  },
  {
    Year: 1780,
    Name: "Richard Gough",
    Plate_Count: 7
  },
  {
    Year: 1784,
    Name: "Richard Gough",
    Plate_Count: 2
  },
  {
    Year: 1786,
    Name: "Richard Gough",
    Plate_Count: 5
  },
  {
    Year: 1788,
    Name: "Richard Gough",
    Plate_Count: 2
  },
  {
    Year: 1789,
    Name: "Richard Gough",
    Plate_Count: 11
  },
  {
    Year: null,
    Name: "John Ward",
    Plate_Count: 1
  }
];


let allData = [
  {
    Year: 1718,
    Name: "John Talman",
    Plate_Count: 4,
    Index_Name: "dirOne"
  },
  {
    Year: 1720,
    Name: "John Talman",
    Plate_Count: 2,
    Index_Name: "dirOne"
  },
  {
    Year: 1721,
    Name: "John Talman",
    Plate_Count: 2,
    Index_Name: "dirOne"
  },
  {
    Year: 1723,
    Name: "John Talman",
    Plate_Count: 4,
    Index_Name: "dirOne"
  },
  {
    Year: 1724,
    Name: "John Talman",
    Plate_Count: 4,
    Index_Name: "dirOne"
  },
  {
    Year: 1725,
    Name: "John Talman",
    Plate_Count: 3,
    Index_Name: "dirOne"
  },
  {
    Year: 1726,
    Name: "William Bogdani",
    Plate_Count: 6,
    Index_Name: "dirOne"
  },
  {
    Year: 1727,
    Name: "William Bogdani",
    Plate_Count: 1,
    Index_Name: "dirOne"
  },
  {
    Year: 1729,
    Name: "William Bogdani",
    Plate_Count: 6,
    Index_Name: "dirOne"
  },
  {
    Year: 1730,
    Name: "William Bogdani",
    Plate_Count: 1,
    Index_Name: "dirOne"
  },
  {
    Year: 1731,
    Name: "William Bogdani",
    Plate_Count: 3,
    Index_Name: "dirOne"
  },
  {
    Year: 1732,
    Name: "William Bogdani",
    Plate_Count: 2,
    Index_Name: "dirOne"
  },
  {
    Year: 1733,
    Name: "William Bogdani",
    Plate_Count: 3,
    Index_Name: "dirOne"
  },
  {
    Year: 1734,
    Name: "William Bogdani",
    Plate_Count: 2,
    Index_Name: "dirOne"
  },
  {
    Year: 1735,
    Name: "William Bogdani",
    Plate_Count: 1,
    Index_Name: "dirOne"
  },
  {
    Year: 1736,
    Name: "William Bogdani",
    Plate_Count: 1,
    Index_Name: "dirOne"
  },
  {
    Year: 1737,
    Name: "William Bogdani",
    Plate_Count: 3,
    Index_Name: "dirOne"
  },
  {
    Year: 1738,
    Name: "William Bogdani",
    Plate_Count: 6,
    Index_Name: "dirOne"
  },
  {
    Year: 1739,
    Name: "William Bogdani",
    Plate_Count: 2,
    Index_Name: "dirOne"
  },
  {
    Year: 1740,
    Name: "Charles Frederick",
    Plate_Count: 1,
    Index_Name: "dirOne"
  },
  {
    Year: 1741,
    Name: "Charles Frederick",
    Plate_Count: 5,
    Index_Name: "dirOne"
  },
  {
    Year: 1742,
    Name: "Thomas Birch",
    Plate_Count: 1,
    Index_Name: "dirOne"
  },
  {
    Year: 1743,
    Name: "Thomas Birch",
    Plate_Count: 2,
    Index_Name: "dirOne"
  },
  {
    Year: 1744,
    Name: "Thomas Birch",
    Plate_Count: 3,
    Index_Name: "dirOne"
  },
  {
    Year: 1746,
    Name: "Thomas Birch",
    Plate_Count: 1,
    Index_Name: "dirOne"
  },
  {
    Year: 1747,
    Name: "John Ward",
    Plate_Count: 1,
    Index_Name: "dirOne"
  },
  {
    Year: 1718,
    Name: "George Vertue",
    Plate_Count: 4,
    Index_Name: "engOne"
  },
  {
    Year: 1720,
    Name: "George Vertue",
    Plate_Count: 1,
    Index_Name: "engOne"
  },
  {
    Year: 1720,
    Name: "Gerard  Vandergucht",
    Plate_Count: 1,
    Index_Name: "engOne"
  },
  {
    Year: 1721,
    Name: "George Vertue",
    Plate_Count: 2,
    Index_Name: "engOne"
  },
  {
    Year: 1723,
    Name: "George Vertue",
    Plate_Count: 4,
    Index_Name: "engOne"
  },
  {
    Year: 1724,
    Name: "George Vertue",
    Plate_Count: 4,
    Index_Name: "engOne"
  },
  {
    Year: 1725,
    Name: "George Vertue",
    Plate_Count: 3,
    Index_Name: "engOne"
  },
  {
    Year: 1726,
    Name: "George Vertue",
    Plate_Count: 6,
    Index_Name: "engOne"
  },
  {
    Year: 1727,
    Name: "George Vertue",
    Plate_Count: 1,
    Index_Name: "engOne"
  },
  {
    Year: 1729,
    Name: "George Vertue",
    Plate_Count: 6,
    Index_Name: "engOne"
  },
  {
    Year: 1730,
    Name: "George Vertue",
    Plate_Count: 1,
    Index_Name: "engOne"
  },
  {
    Year: 1731,
    Name: "George Vertue",
    Plate_Count: 3,
    Index_Name: "engOne"
  },
  {
    Year: 1732,
    Name: "George Vertue",
    Plate_Count: 2,
    Index_Name: "engOne"
  },
  {
    Year: 1733,
    Name: "George Vertue",
    Plate_Count: 3,
    Index_Name: "engOne"
  },
  {
    Year: 1734,
    Name: "George Vertue",
    Plate_Count: 2,
    Index_Name: "engOne"
  },
  {
    Year: 1735,
    Name: "George Vertue",
    Plate_Count: 1,
    Index_Name: "engOne"
  },
  {
    Year: 1736,
    Name: "George Vertue",
    Plate_Count: 1,
    Index_Name: "engOne"
  },
  {
    Year: 1737,
    Name: "George Vertue",
    Plate_Count: 3,
    Index_Name: "engOne"
  },
  {
    Year: 1738,
    Name: "George Vertue",
    Plate_Count: 6,
    Index_Name: "engOne"
  },
  {
    Year: 1739,
    Name: "George Vertue",
    Plate_Count: 2,
    Index_Name: "engOne"
  },
  {
    Year: 1740,
    Name: "George Vertue",
    Plate_Count: 1,
    Index_Name: "engOne"
  },
  {
    Year: 1741,
    Name: "George Vertue",
    Plate_Count: 5,
    Index_Name: "engOne"
  },
  {
    Year: 1742,
    Name: "George Vertue",
    Plate_Count: 1,
    Index_Name: "engOne"
  },
  {
    Year: 1743,
    Name: "George Vertue",
    Plate_Count: 2,
    Index_Name: "engOne"
  },
  {
    Year: 1744,
    Name: "George Vertue",
    Plate_Count: 3,
    Index_Name: "engOne"
  },
  {
    Year: 1746,
    Name: "George Vertue",
    Plate_Count: 1,
    Index_Name: "engOne"
  },
  {
    Year: 1747,
    Name: "George Vertue",
    Plate_Count: 1,
    Index_Name: "engOne"
  },
  {
    Year: 1718,
    Name: "John Talman",
    Plate_Count: 1,
    Index_Name: "delOne"
  },
  {
    Year: 1718,
    Name: "B. M.",
    Plate_Count: 1,
    Index_Name: "delOne"
  },
  {
    Year: 1718,
    Name: "Charles Woodfield",
    Plate_Count: 1,
    Index_Name: "delOne"
  },
  {
    Year: 1718,
    Name: "Giuseppe Grisoni",
    Plate_Count: 1,
    Index_Name: "delOne"
  },
  {
    Year: 1720,
    Name: "George Vertue",
    Plate_Count: 1,
    Index_Name: "delOne"
  },
  {
    Year: 1720,
    Name: "J. Badslade",
    Plate_Count: 1,
    Index_Name: "delOne"
  },
  {
    Year: 1721,
    Name: "William Stukeley",
    Plate_Count: 2,
    Index_Name: "delOne"
  },
  {
    Year: 1723,
    Name: "Samuel Buck and Nathaniel Buck",
    Plate_Count: 4,
    Index_Name: "delOne"
  },
  {
    Year: 1724,
    Name: "John Kirkpatrick and Edmund Predeaux",
    Plate_Count: 2,
    Index_Name: "delOne"
  },
  {
    Year: 1724,
    Name: "Edmund Prideaux",
    Plate_Count: 1,
    Index_Name: "delOne"
  },
  {
    Year: 1724,
    Name: "John Talman",
    Plate_Count: 1,
    Index_Name: "delOne"
  },
  {
    Year: 1725,
    Name: "George Vertue",
    Plate_Count: 3,
    Index_Name: "delOne"
  },
  {
    Year: 1726,
    Name: "George Vertue",
    Plate_Count: 6,
    Index_Name: "delOne"
  },
  {
    Year: 1727,
    Name: "anonymous",
    Plate_Count: 1,
    Index_Name: "delOne"
  },
  {
    Year: 1729,
    Name: "John Bradshaw",
    Plate_Count: 6,
    Index_Name: "delOne"
  },
  {
    Year: 1730,
    Name: "A. Gordon",
    Plate_Count: 1,
    Index_Name: "delOne"
  },
  {
    Year: 1731,
    Name: "George Vertue",
    Plate_Count: 1,
    Index_Name: "delOne"
  },
  {
    Year: 1731,
    Name: "John Sharp",
    Plate_Count: 2,
    Index_Name: "delOne"
  },
  {
    Year: 1732,
    Name: "Isaac Whood, Boul and I.N.",
    Plate_Count: 2,
    Index_Name: "delOne"
  },
  {
    Year: 1733,
    Name: "unknown",
    Plate_Count: 2,
    Index_Name: "delOne"
  },
  {
    Year: 1733,
    Name: "George Vertue",
    Plate_Count: 1,
    Index_Name: "delOne"
  },
  {
    Year: 1734,
    Name: "unknown",
    Plate_Count: 2,
    Index_Name: "delOne"
  },
  {
    Year: 1735,
    Name: "unknown",
    Plate_Count: 1,
    Index_Name: "delOne"
  },
  {
    Year: 1736,
    Name: "unknown",
    Plate_Count: 1,
    Index_Name: "delOne"
  },
  {
    Year: 1737,
    Name: "unknown",
    Plate_Count: 1,
    Index_Name: "delOne"
  },
  {
    Year: 1737,
    Name: "Francis Drake",
    Plate_Count: 1,
    Index_Name: "delOne"
  },
  {
    Year: 1737,
    Name: "William Bogdani",
    Plate_Count: 1,
    Index_Name: "delOne"
  },
  {
    Year: 1738,
    Name: "William Stukeley",
    Plate_Count: 1,
    Index_Name: "delOne"
  },
  {
    Year: 1738,
    Name: "James Vertue and James West",
    Plate_Count: 3,
    Index_Name: "delOne"
  },
  {
    Year: 1738,
    Name: "George Vertue",
    Plate_Count: 2,
    Index_Name: "delOne"
  },
  {
    Year: 1739,
    Name: "George Vertue",
    Plate_Count: 2,
    Index_Name: "delOne"
  },
  {
    Year: 1740,
    Name: "George Vertue",
    Plate_Count: 1,
    Index_Name: "delOne"
  },
  {
    Year: 1741,
    Name: "George Vertue",
    Plate_Count: 4,
    Index_Name: "delOne"
  },
  {
    Year: 1741,
    Name: "Augustin MÃ©nageot",
    Plate_Count: 1,
    Index_Name: "delOne"
  },
  {
    Year: 1742,
    Name: "George Vertue",
    Plate_Count: 1,
    Index_Name: "delOne"
  },
  {
    Year: 1743,
    Name: "Augustin MÃ©nageot",
    Plate_Count: 1,
    Index_Name: "delOne"
  },
  {
    Year: 1743,
    Name: "George Vertue and Pietro Santi Bartoli",
    Plate_Count: 1,
    Index_Name: "delOne"
  },
  {
    Year: 1744,
    Name: "George Vertue and Cornelius Johnson",
    Plate_Count: 3,
    Index_Name: "delOne"
  },
  {
    Year: 1746,
    Name: "unknown",
    Plate_Count: 1,
    Index_Name: "delOne"
  },
  {
    Year: 1747,
    Name: "anonymous",
    Plate_Count: 1,
    Index_Name: "delOne"
  },
  {
    Year: 1747,
    Name: "John Ward",
    Plate_Count: 2,
    Index_Name: "dirTwo"
  },
  {
    Year: 1750,
    Name: "John Ward",
    Plate_Count: 2,
    Index_Name: "dirTwo"
  },
  {
    Year: 1751,
    Name: "John Ward",
    Plate_Count: 1,
    Index_Name: "dirTwo"
  },
  {
    Year: 1752,
    Name: "John Ward",
    Plate_Count: 4,
    Index_Name: "dirTwo"
  },
  {
    Year: 1753,
    Name: "John Ward",
    Plate_Count: 3,
    Index_Name: "dirTwo"
  },
  {
    Year: 1754,
    Name: "John Ward",
    Plate_Count: 1,
    Index_Name: "dirTwo"
  },
  {
    Year: 1755,
    Name: "John Ward",
    Plate_Count: 2,
    Index_Name: "dirTwo"
  },
  {
    Year: 1756,
    Name: "John Ward",
    Plate_Count: 1,
    Index_Name: "dirTwo"
  },
  {
    Year: 1757,
    Name: "John Ward",
    Plate_Count: 1,
    Index_Name: "dirTwo"
  },
  {
    Year: 1758,
    Name: "John Ward",
    Plate_Count: 1,
    Index_Name: "dirTwo"
  },
  {
    Year: 1763,
    Name: "John Taylor",
    Plate_Count: 1,
    Index_Name: "dirTwo"
  },
  {
    Year: 1765,
    Name: "John Taylor",
    Plate_Count: 4,
    Index_Name: "dirTwo"
  },
  {
    Year: 1767,
    Name: "Greogry Sharpe",
    Plate_Count: 1,
    Index_Name: "dirTwo"
  },
  {
    Year: 1768,
    Name: "Greogry Sharpe",
    Plate_Count: 1,
    Index_Name: "dirTwo"
  },
  {
    Year: 1769,
    Name: "Greogry Sharpe",
    Plate_Count: 1,
    Index_Name: "dirTwo"
  },
  {
    Year: 1770,
    Name: "Greogry Sharpe",
    Plate_Count: 1,
    Index_Name: "dirTwo"
  },
  {
    Year: 1780,
    Name: "Richard Gough",
    Plate_Count: 7,
    Index_Name: "dirTwo"
  },
  {
    Year: 1784,
    Name: "Richard Gough",
    Plate_Count: 2,
    Index_Name: "dirTwo"
  },
  {
    Year: 1786,
    Name: "Richard Gough",
    Plate_Count: 5,
    Index_Name: "dirTwo"
  },
  {
    Year: 1788,
    Name: "Richard Gough",
    Plate_Count: 2,
    Index_Name: "dirTwo"
  },
  {
    Year: 1789,
    Name: "Richard Gough",
    Plate_Count: 11,
    Index_Name: "dirTwo"
  },
  {
    Year: null,
    Name: "John Ward",
    Plate_Count: 1,
    Index_Name: "dirTwo"
  },
  {
    Year: 1747,
    Name: "George Vertue",
    Plate_Count: 2,
    Index_Name: "engTwo"
  },
  {
    Year: 1750,
    Name: "George Vertue",
    Plate_Count: 2,
    Index_Name: "engTwo"
  },
  {
    Year: 1751,
    Name: "George Vertue",
    Plate_Count: 1,
    Index_Name: "engTwo"
  },
  {
    Year: 1752,
    Name: "n/a",
    Plate_Count: 1,
    Index_Name: "engTwo"
  },
  {
    Year: 1752,
    Name: "George Vertue",
    Plate_Count: 3,
    Index_Name: "engTwo"
  },
  {
    Year: 1753,
    Name: "George Vertue",
    Plate_Count: 3,
    Index_Name: "engTwo"
  },
  {
    Year: 1754,
    Name: "George Vertue",
    Plate_Count: 1,
    Index_Name: "engTwo"
  },
  {
    Year: 1755,
    Name: "George Vertue",
    Plate_Count: 2,
    Index_Name: "engTwo"
  },
  {
    Year: 1756,
    Name: "George Vertue",
    Plate_Count: 1,
    Index_Name: "engTwo"
  },
  {
    Year: 1757,
    Name: "Arthur Pond",
    Plate_Count: 1,
    Index_Name: "engTwo"
  },
  {
    Year: 1758,
    Name: "n/a",
    Plate_Count: 1,
    Index_Name: "engTwo"
  },
  {
    Year: 1763,
    Name: "James Basire the elder",
    Plate_Count: 1,
    Index_Name: "engTwo"
  },
  {
    Year: 1765,
    Name: "James Basire the elder",
    Plate_Count: 4,
    Index_Name: "engTwo"
  },
  {
    Year: 1767,
    Name: "n/a",
    Plate_Count: 1,
    Index_Name: "engTwo"
  },
  {
    Year: 1768,
    Name: "James Basire the elder",
    Plate_Count: 1,
    Index_Name: "engTwo"
  },
  {
    Year: 1769,
    Name: "John Pye",
    Plate_Count: 1,
    Index_Name: "engTwo"
  },
  {
    Year: 1770,
    Name: "James Watson",
    Plate_Count: 1,
    Index_Name: "engTwo"
  },
  {
    Year: 1780,
    Name: "James Basire the elder",
    Plate_Count: 7,
    Index_Name: "engTwo"
  },
  {
    Year: 1784,
    Name: "James Basire the elder",
    Plate_Count: 2,
    Index_Name: "engTwo"
  },
  {
    Year: 1786,
    Name: "James Basire the elder",
    Plate_Count: 5,
    Index_Name: "engTwo"
  },
  {
    Year: 1788,
    Name: "James Basire the elder",
    Plate_Count: 2,
    Index_Name: "engTwo"
  },
  {
    Year: 1789,
    Name: "James Basire the elder",
    Plate_Count: 11,
    Index_Name: "engTwo"
  },
  {
    Year: null,
    Name: "n/a",
    Plate_Count: 1,
    Index_Name: "engTwo"
  },
  {
    Year: 1747,
    Name: "John Evelyn",
    Plate_Count: 2,
    Index_Name: "delTwo"
  },
  {
    Year: 1750,
    Name: "Richard van Bleeck",
    Plate_Count: 1,
    Index_Name: "delTwo"
  },
  {
    Year: 1750,
    Name: "George Vertue",
    Plate_Count: 1,
    Index_Name: "delTwo"
  },
  {
    Year: 1751,
    Name: "Thomas Ricketts",
    Plate_Count: 1,
    Index_Name: "delTwo"
  },
  {
    Year: 1752,
    Name: "George Vertue",
    Plate_Count: 1,
    Index_Name: "delTwo"
  },
  {
    Year: 1752,
    Name: "n/a",
    Plate_Count: 1,
    Index_Name: "delTwo"
  },
  {
    Year: 1752,
    Name: "Smart Lethieullier and John Lydgate",
    Plate_Count: 1,
    Index_Name: "delTwo"
  },
  {
    Year: 1752,
    Name: "Charles Mitley",
    Plate_Count: 1,
    Index_Name: "delTwo"
  },
  {
    Year: 1753,
    Name: "unknown",
    Plate_Count: 2,
    Index_Name: "delTwo"
  },
  {
    Year: 1753,
    Name: "George Vertue",
    Plate_Count: 1,
    Index_Name: "delTwo"
  },
  {
    Year: 1754,
    Name: "George Vertue",
    Plate_Count: 1,
    Index_Name: "delTwo"
  },
  {
    Year: 1755,
    Name: "unknown",
    Plate_Count: 2,
    Index_Name: "delTwo"
  },
  {
    Year: 1756,
    Name: "George Vertue",
    Plate_Count: 1,
    Index_Name: "delTwo"
  },
  {
    Year: 1757,
    Name: "Arthur Pond and Richard Cosway",
    Plate_Count: 1,
    Index_Name: "delTwo"
  },
  {
    Year: 1758,
    Name: "n/a",
    Plate_Count: 1,
    Index_Name: "delTwo"
  },
  {
    Year: 1763,
    Name: "James Basire the elder",
    Plate_Count: 1,
    Index_Name: "delTwo"
  },
  {
    Year: 1765,
    Name: "James Basire the elder",
    Plate_Count: 2,
    Index_Name: "delTwo"
  },
  {
    Year: 1765,
    Name: "Wenceslaus Hollar and unknown",
    Plate_Count: 2,
    Index_Name: "delTwo"
  },
  {
    Year: 1767,
    Name: "n/a",
    Plate_Count: 1,
    Index_Name: "delTwo"
  },
  {
    Year: 1768,
    Name: "n/a",
    Plate_Count: 1,
    Index_Name: "delTwo"
  },
  {
    Year: 1769,
    Name: "unknown",
    Plate_Count: 1,
    Index_Name: "delTwo"
  },
  {
    Year: 1770,
    Name: "Francis Cotes",
    Plate_Count: 1,
    Index_Name: "delTwo"
  },
  {
    Year: 1780,
    Name: "James Basire the elder",
    Plate_Count: 7,
    Index_Name: "delTwo"
  },
  {
    Year: 1784,
    Name: "John Carter",
    Plate_Count: 2,
    Index_Name: "delTwo"
  },
  {
    Year: 1786,
    Name: "n/a",
    Plate_Count: 1,
    Index_Name: "delTwo"
  },
  {
    Year: 1786,
    Name: "John Carter",
    Plate_Count: 2,
    Index_Name: "delTwo"
  },
  {
    Year: 1786,
    Name: "George Vertue",
    Plate_Count: 2,
    Index_Name: "delTwo"
  },
  {
    Year: 1788,
    Name: "Catherine Downes",
    Plate_Count: 1,
    Index_Name: "delTwo"
  },
  {
    Year: 1788,
    Name: "Samuel Lysons",
    Plate_Count: 1,
    Index_Name: "delTwo"
  },
  {
    Year: 1789,
    Name: "Jacob Schnebbelie",
    Plate_Count: 9,
    Index_Name: "delTwo"
  },
  {
    Year: 1789,
    Name: "Adam de Cardonelle",
    Plate_Count: 2,
    Index_Name: "delTwo"
  },
  {
    Year: null,
    Name: "n/a",
    Plate_Count: 1,
    Index_Name: "delTwo"
  }
];

let oneYears = [
  1718,
  1720,
  1721,
  1723,
  1724,
  1725,
  1726,
  1727,
  1729,
  1730,
  1731,
  1732,
  1733,
  1734,
  1735,
  1736,
  1737,
  1738,
  1739,
  1740,
  1741,
  1742,
  1743,
  1744,
  1746,
  1747,
];

let twoYears = [
  1747,
  1750,
  1751,
  1752,
  1753,
  1754,
  1755,
  1756,
  1757,
  1758,
  1763,
  1765,
  1767,
  1768,
  1769,
  1770,
  1780,
  1784,
  1786,
  1788,
  1789,
  "n/a",
];

let margin = {
  top: 37,
  left: 250,
  bottom: 30,
  right: 60,
};

let height = 450 - margin.top - margin.bottom;
let width = 1200 - margin.left - margin.right;

let chartArea = d3.select('#chart')
  .append('svg')
  .attr("height", height + margin.top + margin.bottom)
  .attr("width", width + margin.left + margin.right)
  .attr('transform', `translate(0,${margin.top})`)
  .append('g')
  .attr('transform', `translate(${margin.left},${margin.top})`);

  let xDomain = d3.extent(oneYears);
  let yDomain = d3.extent(twoYears);

function dataChange(data) {

  let x = d3.scaleLinear()
    .domain(d3.extent())
    .range([0, width]);

  let xAxis = chartArea.append("g")
    .call(d3.axisBottom(x)
      .ticks(19)
      .tickSize(-height))
    .attr('class', "tickMarksX")
    // .selectAll('text')
    .attr("transform", `translate(0,${height + 10})`)

  let y = d3.scalePoint()
    .domain(data.map(d => d.Name))
    .range([0, height]);

let yAxis =  chartArea.append("g")
    .call(d3.axisLeft(y)
      .ticks(null, data.format)
      .tickSize(-width -30))
    .attr('class', "tickMarksY")
    .attr('transform', "translate(-30, 0)");

let lines =  chartArea.append('g')
    .selectAll('line')
    .data(data)
    .enter()
    .append('line')
    .attr("x1", function(d) {
      return x(d.Year);
    })
    .attr("x2", function(d) {
      return x(d.Year);
    })
    .attr("y1", function(d) {
      return height;
    })
    .attr("y2", function(d) {
      return y(d.Name)
    })
    .attr("stroke", "black")
    .attr("transform", `translate(0, 0)`)
    .classed('realTicks', true)



  let tooltip = d3.select("#chart")
    .append("div")
    .style("opacity", 0)
    .attr("class", "tooltip")
    .style("background-color", "white")
    .style("border", "solid")
    .style("border-width", "0.5px")
    .style("border-radius", "5px")
    .style("padding", "5px")

  let mouseover = function(d) {
    tooltip
      .style("opacity", 1)
    d3.select(this)
  }

  let mousemove = function(d) {
    tooltip
      .html(d.Year + ": Plate count:" + d.Plate_Count)
      .style("left", (d3.mouse(this)[0] + 175) + "px")
      .style("top", (d3.mouse(this)[1] + 150) + "px")
  }
  let mouseleave = function(d) {
    tooltip
      .style("opacity", 0)
      .style("top", -100 + "px")
    d3.select(this)
  }

  d3.selectAll("circle").remove();
  let dots = chartArea
    .selectAll("circle")
    .data(data)
    .enter()
    .append("circle")
    .attr("cx", function(d) {
      return x(d.Year);
    })
    .attr("cy", function(d) {
      return y(d.Name);
    })
    .attr("r", function(d) {
      return (d.Plate_Count + 1) * 5
    })
    .attr("transform", `translate(0, 0)`)
    .on("mouseover", mouseover)
    .on("mousemove", mousemove)
    .on("mouseleave", mouseleave);

    // dots
    // .exit()
    // .style('fill', "red");

    d3.select("#dataset")
      .on('change', function(d) {
        let selectName = d3.select(this).property('value');
        console.log('chosen');
        update(selectName);
      })

      function update(selectName){
        let dataFilter = allData.filter(d => d.Index_Name == selectName);
        console.log(dataFilter); //grabs index Name, filters data to only show data for index name, assigns to dataFilter
        let newxDomain = dataFilter.map(d => d.Year);
        let domainedX = d3.extent(newxDomain);
        let newyDomain = dataFilter.map(d => d.Name);
        console.log(newxDomain);

        x
          .domain(d3.extent(newxDomain));
        xAxis
        .transition()
        .duration(1000)
        .call(d3.axisBottom(x))

        y
          .domain(newyDomain);

        yAxis
          .transition()
          .duration(1000)
          .call(d3.axisLeft(y)
            .ticks(null, data.format)
            .tickSize(-width))
          .attr('class', "tickMarksY")


        lines
          .data(dataFilter)
          .transition()
          .duration(1000)
          .attr("x1", function(d) {
            return x(d.Year);
          })
          .attr("x2", function(d) {
            return x(d.Year);
          })
          .attr("y1", function(d) {
            return height;
          })
          .attr("y2", function(d) {
            return y(d.Name)
          })

        dots
          .data(dataFilter)

        dots
          .transition()
          .duration(1000)
          .style("fill", "blue")
          .attr("cx", function(d) {
            return x(d.Year);
          })
          .attr("cy", function(d) {
            return y(d.Name);
          })
          .attr("r", function(d) {
            return (d.Plate_Count + 1) * 5
          });

          dots
            .exit()
            .style('fill', 'red')


      }
}

dataChange(nameOne);

function getNamesOne() {
  let selectName = "dirOne";
  let dataFilter = allData.filter(d => d.Index_Name == selectName)
}


  // comment out 1547 to 1554 in case not ready for prof. heringman
