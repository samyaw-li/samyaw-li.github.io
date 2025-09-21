import "./UCLA.css"

function UCLA() {
  return (
    <div>
      <h1 className="page-title">UCLA</h1>
      <h2>Coursework:</h2>
         <section className="year">
        <h2>Second Year (2025-2026)</h2>

        <h3>Fall 2025</h3>
        <ul>
          <li>CS 35L – Software Construction</li>
          <li>MATH 33B – Differential Equations</li> 
          <li>PHYSICS 1B – Physics: Oscillations, Waves, Electric and Magnetic Fields</li>
        </ul>
  
      </section>

      <section className="year">
        <h2>First Year (2024-2025)</h2>

        <h3>Spring 2025</h3>
        <ul>
          <li>CS 32 – Data Structures and Algorithms</li>
          <li>MATH 33A – Linear Algebra</li>
          <li>LIFESCI 15 – Life: Concepts and Issues</li>
          <li>ARCH&UD 10B – Histories of Architecture and Urbanism II</li>
        </ul>

        <h3>Winter 2025</h3>
        <ul>
          <li>CS 31 – Intro to Computer Science</li>
          <li>MATH 32B – Calculus of Several Variables II</li>
          <li>MATH 61 – Discrete Structures</li>
        </ul>

        <h3>Fall 2024</h3>
        <ul>
          <li>MATH 32A – Calculus of Several Variables I</li>
          <li>CHEM 20A – Chemical Structure</li>
          <li>POL SCI 20 – World Politics</li>
        </ul>
      </section>
    </div>
  ); 
}
export default UCLA;