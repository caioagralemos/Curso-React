import Accordion from "../components/accordion"

function AccordionPage() {
    const itens = [
        {
            id: 'nb6mnbm9i',
            label: 'Clique aqui! 1',
            content:'lorem ipsum dolor sit amet, hoje o madrid tomou peia para o city, 4x0 fora o baile, mas haaland péssimo'
        },
        {
            id: 'kjh88kl08',
            label: 'Clique aqui! 2',
            content:'lorem ipsum dolor sit amet, ontem o milan tomou peia para a inter, 1x0, mas pior foi no jogo com mando do time 7x campeão, onde ele perdeu de 2x0'
        },
        {
            id: 'lpokjhuh898',
            label: 'Clique aqui! 3',
            content:'lorem ipsum dolor sit amet, hoje o madrid tomou peia para o city num etihad lotado e barulhento, 5x1 no agregado'
        },
    ]
    return (
        <div className="App">
            <Accordion
                itens={itens}
            />
        </div>
    )
}

export default AccordionPage