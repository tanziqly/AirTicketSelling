import os

import pandas as pd
from datetime import datetime
import re
from sklearn.model_selection import train_test_split
import os
from keras.models import Sequential
from keras.layers import Dense

os.environ["TF_ENABLE_ONEDNN_OPTS"] = "0"


def validate(date_text):
    try:
        datetime.strptime(date_text, '%d-%m-%Y')
        return True
    except ValueError:
        return False

def validate_num_code(num_code):
    num_code = str(num_code)
    return len(num_code) == 3

def validate_dep_time(time_str):
    return bool(re.match(r'^\d{2}:\d{2}$', time_str))

def is_valid_price(price):
    if re.match(r'^\d{1,2},\d{3}$', str(price)):
        return True
    else:
        return False

def is_valid_time(time_str):
    return bool(re.match(r'^\d{1,2}h \d{1,2}m$', str(time_str)))

df = pd.read_excel('Train.xlsx')

df = df[df['ch_code'].isin(['AI', 'UK'])]
df = df[df['airline'].isin(['Air India', 'Vistara'])]
df = df[df['from'].isin(['Mumbai', 'Bangalore', 'Kolkata', 'Delhi', 'Chennai', 'Hyderabad'])]
df = df[df['to'].isin(['Mumbai', 'Bangalore', 'Kolkata', 'Delhi', 'Chennai', 'Hyderabad'])]

df = df[~df['stop'].str.contains('Via')]

df = df[df['price'].apply(is_valid_price)]
df = df[df['time_taken'].apply(is_valid_time)]


def is_invalid_stop(value):
    if isinstance(value, str):
        return value.startswith('2+-stop')
    return False

df = df[~df['stop'].apply(is_invalid_stop)]

df['Date_validate'] = df['date'].apply(lambda x: validate(str(x)))
df = df[df['Date_validate'] == True]
df.drop('Date_validate', axis=1, inplace=True)

df['num_code_validate'] = df['num_code'].apply(validate_num_code)
df = df[df['num_code_validate'] == True]
df.drop('num_code_validate', axis=1, inplace=True)

df['dep_time_validate'] = df['dep_time'].apply(validate_dep_time)
df = df[df['dep_time_validate'] == True]
df.drop('dep_time_validate', axis=1, inplace=True)

clean_df = df.drop_duplicates(keep='first')

clean_df.drop(['ch_code', 'num_code'], axis=1, inplace=True)

pd.set_option('future.no_silent_downcasting', True)
airline_num = {'Air India': 0, 'Vistara': 1}
clean_df['airline'] = clean_df['airline'].replace(airline_num)

from_and_to = {'Mumbai': 0, 'Bangalore': 1, 'Kolkata': 2, 'Delhi': 3, 'Chennai': 4, 'Hyderabad': 5}
clean_df['from'] = clean_df['from'].replace(from_and_to)
clean_df['to'] = clean_df['to'].replace(from_and_to)

stop_num = {'1-stop': 1, 'non-stop': 0}
clean_df['stop'] = clean_df['stop'].replace(stop_num)

clean_df['date'] = pd.DatetimeIndex(clean_df['date']).month

class_num = {'economy': 0, 'business': 1}
clean_df[' class'] = clean_df[' class'].replace(class_num)



data = pd.read_excel('TrainReady.xlsx')


X = data[['from', 'to', 'price', 'class', 'airlines']]
y = data['best_flight']

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

model = Sequential()
model.add(Dense(64, input_dim=5, activation='relu'))
model.add(Dense(32, activation='relu'))
model.add(Dense(1, activation='sigmoid'))

model.compile(loss='binary_crossentropy', optimizer='adam', metrics=['accuracy'])

model.fit(X_train, y_train, epochs=10, batch_size=32)

loss, accuracy = model.evaluate(X_test, y_test)
print(f'Loss: {loss}, Accuracy: {accuracy}')


