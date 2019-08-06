import React, { Component } from 'react';
import {
    Alert,
    Card,
    CardTitle,
    CardContent,
    FloatingActionList,
    Info,
    Success,
    Warning,
    Error,
} from '../../index';

class TestAlerts extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Card>
                <CardTitle>
                    <h4 className="mdl-card__title-text">Test Alerts</h4>
                </CardTitle>
                <CardContent>
                    <Info border vertSpacing>
                        info
                    </Info>
                    <Success border vertSpacing>
                        success
                    </Success>
                    <Warning border vertSpacing>
                        warning
                    </Warning>
                    <Error
                        handlerDismiss={() => alert('dismiss handler')}
                        labelDismiss="remove error"
                        vertSpacing
                    >
                        error
                    </Error>
                    <Alert
                        border
                        vertSpacing
                        handlerDismiss={() => alert('dismiss handler')}
                        labelDismiss="label for handler"
                        iconDismiss="help"
                    >
                        <p>This is a</p>
                        <p>untyped message.</p>
                    </Alert>
                    <Error
                        handlerDismiss={() => alert('dismiss handler')}
                        labelDismiss="remove error"
                        vertSpacing
                        reducedHeight
                        border
                    >
                        <h5>
Test with
                            <code>reducedHeight</code>
                            {' '}
option
                        </h5>
                        <p>
                            Fore commodo si praesentibus, noster aut ab dolore senserit eu minim ad laborum,
                            sunt arbitror quo exercitation qui a minim iis aliqua ab ea amet cillum non
                            litteris, quid mandaremus de litteris, aut probant domesticarum. Quorum
                            consequat voluptatibus. Dolor qui incurreret, irure senserit ita fore malis.Qui
                            cupidatat transferrem, quo ut dolor legam legam, tempor comprehenderit nostrud
                            eram offendit et est iudicem ad nescius quo senserit sed illum quo singulis ad
                            summis iudicem, qui labore cillum quo litteris, mandaremus quem doctrina
                            consequat. Cernantur illum mentitum aliquip. Officia an duis, est nam esse enim
                            fugiat, sed tamen doctrina illustriora, nisi ubi arbitror do veniam. Admodum
                            comprehenderit id laborum.
                        </p>
                        <p>
                            E esse magna legam expetendis, senserit et arbitror, labore id mandaremus, minim
                            id ingeniis, commodo ipsum nisi iis eram, legam ingeniis sempiternum ne in esse
                            iudicem, expetendis anim ubi vidisse tractavissent. Si litteris domesticarum,
                            fabulas aliqua ipsum doctrina quorum, fore hic hic legam officia, esse ullamco e
                            litteris. Officia tempor aliquip eiusmod ubi tamen voluptate mandaremus, ex anim
                            do illum, si elit consequat. Incurreret magna dolore iudicem veniam, occaecat
                            enim irure offendit aute et ad culpa culpa est singulis, sunt iudicem e
                            concursionibus, expetendis elit tamen non sint iis qui sint aut illum o duis
                            eiusmod litteris, aliqua arbitror ut concursionibus.Proident quid eram nam esse.
                            Mentitum eu mentitum eu culpa voluptate transferrem se id labore enim in
                            arbitror, enim proident excepteur. Malis quamquam o esse cillum, aut pariatur ut
                            voluptate.Malis hic vidisse est si deserunt concursionibus, irure voluptate
                            senserit, ad se illum laboris. Duis est quibusdam, aut fore minim eu cupidatat.
                            Anim quibusdam ea litteris aut arbitror do legam pariatur.Ne veniam duis cillum
                            cernantur id e elit singulis, irure offendit ita distinguantur aut sed sunt elit
                            se laboris ut in illum cohaerescant, ad minim expetendis cupidatat ea summis
                            constias de imitarentur hic officia duis esse possumus nisi. Culpa relinqueret
                            deserunt aute offendit, aut appellat illustriora. Aut multos iudicem
                            firmissimum, ubi commodo de quamquam.
                        </p>
                        <p>
                            <strong>Very long line </strong>
                            Ametestnostrudubidolorexsummisproidentaliquip.Laborumforesummisofficiamalisteexteminimcillumdolore.Excepteurnoneramconsequatsedoillumsuntautlaborumeadolorsenseritarbitror,offenditmagnaveniamnesciuseram.Litteriselitveniamiudicemquisquidoloridutesseconsequat.
                        </p>
                        <p>
                            Expetendis quo magna excepteur. Sint est commodo ne dolor proident tractavissent
                            se tempor ne iudicem ita elit qui fugiat singulis sed consectetur. Non dolor
                            mandaremus. Hic o sunt quae dolor ea nulla nescius praetermissum.Voluptate esse
                            legam o quem. Summis concursionibus singulis fore possumus ubi veniam officia o
                            adipisicing te dolor eruditionem possumus export quamquam, et tamen eiusmod,
                            veniam quibusdam non distinguantur ut eu si sempiternum eu eram quamquam ad aute
                            culpa, o velit possumus firmissimum. Quae ne te amet litteris, non quis
                            arbitrantur ex ingeniis si esse, ita arbitror familiaritatem. Laborum noster
                            fabulas.De minim mentitum exercitation, minim nostrud o distinguantur eu qui
                            labore quibusdam, arbitror non quae. Quo quibusdam nam occaecat, eiusmod ab
                            magna. Cupidatat ab nostrud, labore consequat ita aliquip. Eu labore ne ipsum.Do
                            cillum tempor hic laboris e nisi cernantur incididunt, non summis irure multos
                            iudicem in multos eruditionem cernantur magna arbitror, export eiusmod ullamco
                            id probant qui nisi cernantur, laboris de sint ea te ingeniis consectetur. Est
                            minim graviterque. Ad enim id minim. Senserit aut noster iudicem o magna nostrud
                            an tractavissent.Ab aliqua officia constias e iis enim si illum, quibusdam
                            export tempor commodo cillum, do noster export in possumus, a officia
                            familiaritatem ab cernantur multos excepteur o duis familiaritatem fabulas eram
                            doctrina an litteris labore irure et culpa. Doctrina cillum eiusmod, labore ad
                            deserunt a multos non incurreret hic quorum ubi aliquip ut laboris eu o ubi
                            illustriora, incurreret an quae, ubi quis litteris exercitation, labore
                            expetendis vidisse. Fore iudicem ullamco. Quid expetendis imitarentur.Ab ex
                            dolore cernantur. Dolor e possumus an elit. Ubi summis exquisitaque do iis legam
                            quid quo mandaremus ad est magna cernantur quamquam qui ita tamen exquisitaque,
                            eu quid veniam noster deserunt, o minim appellat constias, malis ingeniis an
                            irure aliqua ex proident sint iudicem. Incurreret duis ita incididunt
                            arbitrantur.Illum ex ubi illum constias, incurreret aliqua export officia velit,
                            an fore mentitum, non ab export nescius, incurreret summis minim o quem, te
                            legam constias cernantur ab pariatur ipsum ipsum an fugiat, labore reprehenderit
                            aliquip nulla laboris. Illum aliquip id veniam quae, ex ab cohaerescant sed
                            tamen sed admodum ut cernantur est amet ingeniis, expetendis domesticarum est
                            admodum, proident fore et offendit praetermissum de elit ubi mentitum ex illum
                            nam ab sint quamquam. Illum ea incurreret ubi legam ad ipsum id est quis
                            incurreret, offendit labore nescius probant te e quorum multos cillum iudicem,
                            eiusmod nulla veniam sed amet ne ad sunt vidisse quo ex do tamen quis export, si
                            enim iudicem. Sed anim fugiat si fabulas ex summis arbitror se domesticarum,
                            sint graviterque commodo legam expetendis nam est summis deserunt
                            consectetur.Nisi ullamco excepteur in ex irure possumus instituendarum, illum
                            voluptate commodo in sed in duis esse multos quo cillum deserunt hic dolore
                            nulla, sed id legam irure anim o cernantur legam ullamco, quo enim eram quo
                            admodum. Hic si tractavissent. Quo ullamco praetermissum ex iis anim singulis,
                            nostrud aliqua eiusmod nescius, fabulas praetermissum ut mentitum ab quis
                            proident ne laboris, litteris cohaerescant et eiusmod, arbitror legam summis ad
                            veniam et ingeniis nam ullamco.
                        </p>
                    </Error>
                </CardContent>
                <FloatingActionList
                    actions={[
                        {
                            icon: 'edit',
                            label: 'Something',
                            handler() {
                                alert('You clicked the FAB.');
                            },
                        },
                    ]}
                    fabSize="mini"
                />
            </Card>
        );
    }
}
export default TestAlerts;
