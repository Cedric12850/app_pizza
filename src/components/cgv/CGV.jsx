import React from 'react'
import "./cgv.css";
import Container from 'react-bootstrap/Container';
import Header from '../header/Header';

const CGV = () => {
  return (
    <>
    <Header />
    <Container>
      <h2>Conditions Générales de Ventes</h2>
      <h3>DEFINITIONS</h3>
          <p>Dans les présentes Conditions Générales de Vente, les mots et expressions suivants auront les significations suivantes :
          Client » désigne le ou les internaute(s) naviguant sur le Site et effectuant une commande par téléphone ou un achat en ligne de Produits.
          CGV » désigne les présentes Conditions Générales de Vente de Produits sur le Site.
          PIZZA DELICIOUS » désigne, selon le cas, soit la société d'exploitation du restaurant sous enseigne PIZZA DELICIOUS sélectionné par le Client et auprès de laquelle la commande sera enregistrée et dont les coordonnées seront indiquées sur l'e-mail confirmant la commande et sur le ticket de caisse délivré par PIZZA DELICIOUS lors du retrait ou de la livraison des Produits, soit, de manière générale, les restaurants sous enseigne PIZZA DELICIOUS.
          Produit(s) » désigne le(s) produit(s) proposé(s) à la vente sur le Site.</p>

      <h3>PORTEE DES CONDITIONS GENERALES DE VENTE</h3>
          <p>PIZZA DELICIOUS a pour activité la vente de pizzas, et autres produits d'accompagnement, en livraison, sur place et en vente à emporter.
          Les présentes CGV sont accessibles à tout moment sur le Site et s'appliquent à toutes les commandes de Produits passées par le Client sur le Site ou par téléphone auprès de PIZZA DELICIOUS. En passant commande d'un Produit, le Client reconnaît expressément avoir pris connaissance des CGV et les avoir acceptées sans restriction ni réserve, en cochant la case prévue à cet effet, et renonce, notamment, à se prévaloir de toute autre version ou document contradictoire, et notamment les conditions applicables pour les ventes en magasins. L'acceptation des CGV n'est en aucune façon conditionnée par une signature manuscrite de la part du Client.
          PIZZA DELICIOUS se réserve le droit de mettre à jour à tout moment les CGV. En cas de modification, il sera appliqué, à chaque commande, les CGV en vigueur au jour de la commande de Produits. Le Client est invité à consulter régulièrement les CGV afin de se tenir informé des évolutions les plus récentes.
          Les données enregistrées par le Site constituent la preuve de l'ensemble des transactions conclues avec le Client.</p>

      <h3>ACCEPTATION DES CGV</h3>
          <p>Le Client déclare avoir pris connaissance et accepté les présentes CGV avant la passation de sa Commande. Toute Commande d'un Produit sur le Site matérialise donc de la part du Client l'acceptation des présentes CGV</p>

      <h3>TERRITOIRE - ZONES DE LIVRAISON</h3>
          <p>Le Client commandant par téléphone ou via le Site et qui souhaite être livré doit fournir une adresse de livraison valide située dans une zone de livraison d'un établissement PIZZA DELICIOUS. La liste actualisée des restaurants PIZZA DELICIOUS et des villes
          desservies par PIZZA DELICIOUS est disponible sur le Site. Si l'adresse indiquée n'est pas desservie, le Client en est informé avant la commande</p>
    </Container>
    </>
  )
}

export default CGV