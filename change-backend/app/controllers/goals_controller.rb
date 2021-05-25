class GoalsController < ApplicationController

    def index
        @goals = Goal.all 
        render json: @goals 
    end 

    def show 
        @goal = Goal.find params[:id]
        render json: @goal  
    end 
    
    # def create 
    #     @goals = Goal.create!(
    #         original_s: params[:original_s],
    #         original_sm: params[:original_sm],
    #         original_sma: params[:original_sma],
    #         original_smar: params[:original_smar],
    #         start_date: params[:start_date],
    #         end_date: params[:end_date],
    #         final_goal: params[:final_goal]
    #     )
    #     render json: @goals
    # end 
    
    # def update
    #     @goals = Goal.find params[:id]
    #     @goal.update(
    #         original_s: params[:original_s],
    #         original_sm: params[:original_sm],
    #         original_sma: params[:original_sma],
    #         original_smar: params[:original_smar],
    #         start_date: params[:start_date],
    #         end_date: params[:end_date],
    #         final_goal: params[:final_goal]
    #     )
    #     render json: @goal 
    # end 

    # def destroy
    #     @goal = Goal.find params[:id]
    #     @goal.destroy 
    # end 

end
