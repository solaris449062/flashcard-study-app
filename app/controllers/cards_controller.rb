class CardsController < ApplicationController

    def index
        cards = Card.all
        render json: cards
    end
    
    def show
        card = Card.find_by(id: params[:id])
        render json: card
    end

    def create
        card = Card.create!(card_params)
        render json: card, status: :created
    end

    def update
        card = Card.find_by(id: params[:id])
        card.update(card_params)
        render json: card
    end
    
    def destroy
        card = Card.find_by(id: params[:id])
        if card
            card.destroy
            head :no_content
        end
    end

    private

    def card_params
        params.permit(:title, :subject, :content, :studied, :mastered, :user, :id, :card, :user_id)
    end

end
