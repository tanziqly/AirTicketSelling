import numpy as np
import pandas as pd


from_and_to = {'Mumbai': 0, 'Bangalore': 1, 'Kolkata': 2, 'Delhi': 3, 'Chennai': 4, 'Hyderabad': 5}
clean_df['from'] = clean_df['from'].replace(from_and_to)
clean_df['to'] = clean_df['to'].replace(from_and_to)

stop_num = {'1-stop': 1, 'non-stop': 0}
clean_df['stop'] = clean_df['stop'].replace(stop_num)

clean_df['date'] = pd.DatetimeIndex(clean_df['date']).month

class_num = {'economy': 0, 'business': 1}
clean_df[' class'] = clean_df[' class'].replace(class_num)

from keras.dataset import boston_housing

(train_x,train_y),(test_x,test_y)=boston_housing.load_data()