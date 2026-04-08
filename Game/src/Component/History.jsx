const History = ({ rounds, detail }) => {
  return (
    <section className='history'>
      <h3>Move History</h3>
      {rounds.length === 0 ? (
        <p className='history-empty'>No moves yet.</p>
      ) : (
        <ul className='history-list'>
          {rounds.map((round) => (
            <li key={round.id} className='history-item'>
              <span>#{round.id}</span>
              <span>
                You: {detail[round.userMove]} {round.userMove}
              </span>
              <span>
                Computer: {detail[round.computerMove]} {round.computerMove}
              </span>
              <span>{round.result}</span>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}

export default History
