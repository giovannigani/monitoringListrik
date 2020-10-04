import { IonButton } from '@ionic/react';
import React from 'react';
import './ExploreContainer.css';

interface ContainerProps { }

const ExploreContainer: React.FC<ContainerProps> = () => {
  return (
    <div className="container">
      <strong>You Dont Have Any Connected Device</strong>
      <IonButton expand="block">Connect Device</IonButton>
    </div>
  );
};

export default ExploreContainer;
